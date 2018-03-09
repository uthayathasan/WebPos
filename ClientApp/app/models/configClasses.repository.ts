export class Filter {
    customerId?: string;
    storeId?: string;
    tillId?:string;
    reset() {
        this.customerId=null;
        this.storeId=null;
        this.tillId=null;
    }
}