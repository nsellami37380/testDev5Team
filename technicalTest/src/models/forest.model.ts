import { Rabbit } from "./rabbit.model"
import { Terrier } from "./terrier.model"

export class Forest{

    constructor(
        public terrierList: Terrier[],
        public rabbitList: Rabbit[],
        public surface: number,
        nbRabbitTrees: number
    ){

    }
}