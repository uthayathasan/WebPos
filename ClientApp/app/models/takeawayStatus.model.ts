export class TakeawayStatus{
    constructor(
        public takeawayId?:number,
        public slipNo?:number,
        public customerId?:number,
        public noOfItems?:number,
        public noOfKitchenItems?:number,
        public noOfNonServedItems?:number,
        public total?:number,
        public counterPrint?:boolean,
        public colour?:string
    ){}
}