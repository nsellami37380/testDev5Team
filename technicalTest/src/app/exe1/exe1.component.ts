import { Component, OnInit } from '@angular/core';
import { CommercialDesk } from 'src/models/commercial-desk.model';
import { Company } from 'src/models/company.model';

import { Desk } from 'src/models/desk.model';
import { DeveloperDesk } from 'src/models/developer-desk.model';

@Component({
  selector: 'app-exe1',
  templateUrl: './exe1.component.html',
  styleUrls: ['./exe1.component.scss']
})
export class Exe1Component implements OnInit {

  private company: Company = new Company();
  public textToDisplay: string = "";
  deskCommercial1: Desk = new CommercialDesk(10,10,10,10,10);
  deskCommercial2: Desk = new CommercialDesk(10,10,10,10,10);
  deskCommercial3: Desk = new CommercialDesk(10,10,10,10,10);
  deskDeveloper1: Desk = new DeveloperDesk(10,10,10,10,10);
  deskDeveloper2: Desk = new DeveloperDesk(10,10,10,10,10);

  constructor() { 
    this.company.getDeskCommercialList().push(this.deskCommercial1); 
    this.company.getDeskCommercialList().push(this.deskCommercial2); 
    this.company.getDeskCommercialList().push(this.deskCommercial3);
    this.company.getDeskDeveloperList().push(this.deskDeveloper1);
    this.company.getDeskDeveloperList().push(this.deskDeveloper2);

  }

  ngOnInit(): void {


    

    
  }

  
  doTest(){
    let nbDeveloper : number = 0;
    let nbCommercial: number = 0;
    let textArea = document.querySelector("#textarea") as Element;
    textArea.innerHTML = ""
    while(true) {
      let i : number = Math.floor(Math.random()*2);
      if (i == 1)  
      {        
        if (this.company.addEmployes(this.company.getDeskCommercialList())){
          textArea.innerHTML  += "Ajout d'un commercial \n"; 
          nbCommercial++;       
        }
        else{
          textArea.innerHTML += "Ajout d'un commercial impossible par manque d'espace"
          break
        }
      }
      else{
       
        if (this.company.addEmployes(this.company.getDeskDeveloperList())){
          textArea.innerHTML += "Ajout d'un développeur \n";
          nbDeveloper++
          
        } else {
          textArea.innerHTML += "Ajout d'un développeur impossible par manque d'espace"
          break
        }
      }
        textArea.innerHTML  += "Il y a " + nbDeveloper + " développeurs \n";
        textArea.innerHTML  += "Il y a " + nbCommercial + " commerciales\n";
        let numDesk = 0;
        this.company.getDeskCommercialList().forEach(desk => {
          numDesk++; 
          textArea.innerHTML  += "Bureau commerciale " + numDesk + " : Taux d'espace disponible " + desk.tauxespacedispo() + "\n";
        });
        numDesk = 0;
        this.company.getDeskDeveloperList().forEach(desk => {
          numDesk++; 
          textArea.innerHTML  += "Bureau développeur " + numDesk + " : Taux d'espace disponible " + desk.tauxespacedispo() + "\n";
        });
        
        textArea.innerHTML  += "\n";
      }
    
      
  }





}
