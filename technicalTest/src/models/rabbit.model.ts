import { EColorRabbit } from "./enum/EColorRabbit.enum"

export class Rabbit{

    constructor(
        public velocity: number,
        public color: EColorRabbit,
        public kilometersDone: number,
        public x: number,
        public y: number,
    ){


    }

    follow(): void{

    }


}