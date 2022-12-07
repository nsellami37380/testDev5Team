import { Desk } from "./desk.model";

export class DeveloperDesk extends Desk{
    public override tauxespacedispo(): number {


        let nbNetworkSocket = this.nbNetworkSocket - this.nbEmployes*3;
        let nbPowerOutlet  = this.nbPowerOutlet - this.nbEmployes*3;
        let nbTelephoneSocket =this.nbTelephoneSocket - this.nbEmployes;
        let nbTable = this.nbTable - this.nbEmployes;
        let nbChair = this.nbChair - this.nbEmployes*1.5;
  
        return  Math.min(nbNetworkSocket, nbPowerOutlet, nbTelephoneSocket, nbTable, nbChair);
    }
}