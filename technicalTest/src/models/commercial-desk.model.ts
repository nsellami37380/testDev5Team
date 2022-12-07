import { Desk } from "./desk.model";

export class CommercialDesk extends Desk{
    
    public override tauxespacedispo(): number {
        let nbNetworkSocket = this.nbNetworkSocket - this.nbEmployes;
        let nbPowerOutlet  = this.nbPowerOutlet - this.nbEmployes;
        let nbTelephoneSocket =this.nbTelephoneSocket - this.nbEmployes*2;
        let nbTable = this.nbTable - this.nbEmployes;
        let nbChair = this.nbChair - this.nbEmployes*2;
  
        return  Math.min(nbNetworkSocket, nbPowerOutlet, nbTelephoneSocket, nbTable, nbChair);
    }

}