using System;
public static class MathFunctions
{
    public static System.Boolean IsNumeric(System.Object Expression)
    {
        if (Expression == null || Expression is DateTime)
            return false;

        if (Expression is Int16 || Expression is Int32 || Expression is Int64 || Expression is Decimal || Expression is Single || Expression is Double || Expression is Boolean)
            return true;

        try
        {
            if (Expression is string)
                Double.Parse(Expression as string);
            else
                Double.Parse(Expression.ToString());
            return true;
        }
        catch { } // just dismiss errors but return false
        return false;

    }

    private static int[] moveByDays = { 6, 7, 8, 9, 10, 4, 5 };

    public static int WeekOfYear(this DateTime date)
    {
        DateTime startOfYear = new DateTime(date.Year, 1, 1);
        DateTime endOfYear = new DateTime(date.Year, 12, 31);

        int numberDays = date.Subtract(startOfYear).Days +
                        moveByDays[(int)startOfYear.DayOfWeek];
        int weekNumber = numberDays / 7;
        switch (weekNumber)
        {
            case 0:
                weekNumber = WeekOfYear(startOfYear.AddDays(-1));
                break;
            case 53:
                if (endOfYear.DayOfWeek < DayOfWeek.Thursday)
                {
                    weekNumber = 1;
                }
                break;
        }
        return weekNumber;
    }

    public static int GetQuarter(this DateTime dt)
    {
        return (dt.Month - 1) / 3 + 1;
    }
}