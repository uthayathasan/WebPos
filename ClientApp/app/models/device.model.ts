export class Device {
    constructor(
        public deviceId?:string,
        public customerId?:string,
        public storeId?:string,
        public tillId?:string,
        public storeName?:string,
        public userId?:string,
        public password?:string
    ){}
}