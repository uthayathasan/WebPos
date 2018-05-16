export class TableStatus{
    constructor(
        public counterPrint?:boolean,
        public customerId?:number,
        public floor?:string,
        public seats?:string,
        public show?:boolean,
        public slipNo?:number,
        public noOfItems?:number,
        public noOfKitchenItems?:number,
        public noOfNonServedItems?:number,
        public tableID?:number,
        public tableName?:string,
        public total?:number,
        public x?:number,
        public y?:number,
        public colour?:string
    ){}
}