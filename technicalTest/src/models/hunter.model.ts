export class Hunter{

    constructor(
        public bullet: number,
        public hunger: number,
        public distance : number,
        public x: number,
        public y: number
    ){

    }

    public hunt(): void{
        this.bullet--;
    }
}