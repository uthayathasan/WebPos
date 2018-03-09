export class EposTransaction{
    constructor(
        public counterPrint?:boolean,
        public customerId?:number,
        public deliveryId?:number,
        public floor?:string,
        public id?:number,
        public infoItem?:number,
        public invoicedDate?:Date,
        public invoicePrinted?:boolean,
        public loyaltyCard?:string,
        public membershipNo?:string,
        public orderNo?:number,
        public orderType?:number,
        public orderTypeText?:string,
        public seats?:string,
        public slipNo?:number,
        public staffId?:string,
        public storeId?:string,
        public takeawayId?:number,
        public tableId?:number,
        public tableName?:string,
        public tillId?:string,
        public transDate?:Date,
        public transType?:number,
        public transactionText?:string
    ){}
}