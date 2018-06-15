export class Authorization {
    constructor(
        public tag?:string,
        public name?:string,
        public backOffice?:boolean,
        public admin?:boolean,
        public manager?:boolean,
        public supervisor?:boolean,
        public cashier?:boolean,
        public staff?:boolean,
        public type?:string,
        public rootTag?:string,
        public childTag?:string,
        public lineNo?:number,
        public live?:boolean
    ){}
}