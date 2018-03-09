export class MenuLine{
    constructor(
        public bootstrapButton?:string,
        public colour?:string,
        public description?:string,
        public htmlColour?:string,
        public imagePath?:string,
        public isImage?:boolean,
        public keyCommand?:number,
        public keyId?:number,
        public keyValue?:string,
        public menuId?:string
    ){}
}