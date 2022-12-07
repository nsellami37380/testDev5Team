export abstract   class Desk{

   protected nbNetworkSocket: number = 0;
   protected nbPowerOutlet: number = 0;
   protected nbTelephoneSocket: number = 0;
   protected nbTable: number= 0;
   protected nbChair: number= 0;
   protected nbEmployes: number = 0;


    constructor(nbNetworkSocket: number, nbPowerOutlet: number, nbTelephoneSocket: number, nbTable: number, nbChair: number, nbEmployes: number = 0){
      this.nbNetworkSocket = nbNetworkSocket;
      this.nbPowerOutlet = nbPowerOutlet;
      this.nbTelephoneSocket = nbTelephoneSocket;
      this.nbTable = nbTable;
      this.nbChair = nbChair;
      this.nbEmployes = nbEmployes;
    }

     public abstract tauxespacedispo():number;
    //  {
    //   this.nbNetworkSocket -= this.nbEmployes;
    //   this.nbPowerOutlet  -= this.nbEmployes;
    //   this.nbTelephoneSocket -= this.nbEmployes;
    //   this.nbTable -= this.nbEmployes;
    //   this.nbChair -= this.nbEmployes;

    //     return  Math.min(this.nbNetworkSocket, this.nbPowerOutlet, this.nbTelephoneSocket, this.nbTable, this.nbChair);

    //  };  
     public addEmployes(): Boolean{
      this.nbEmployes++;  
      const taux = this.tauxespacedispo();
      if (taux < 0){
       this.nbEmployes--;
       return false;       
      }  
      return true;
     }
        
    }


    
    
