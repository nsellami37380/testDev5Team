import { Component, OnInit } from '@angular/core';
import { EColorRabbit } from 'src/models/enum/EColorRabbit.enum';
import { Forest } from 'src/models/forest.model';
import { Hunter } from 'src/models/hunter.model';
import { Rabbit } from 'src/models/rabbit.model';
import { Terrier } from 'src/models/terrier.model';

@Component({
  selector: 'app-exe4',
  templateUrl: './exe4.component.html',
  styleUrls: ['./exe4.component.scss']
})
export class Exe4Component implements OnInit {

  private bunny1: Rabbit = new Rabbit(0.9, EColorRabbit.WHITE, 1, 1.9, 1.8);
  private bunny2: Rabbit = new Rabbit(0.8, EColorRabbit.WHITE, 0.3, 2.7, 2.6);
  private bunny3: Rabbit = new Rabbit(1, EColorRabbit.BROWN, 0.6, 3.4, 3.6);
  private bunny4: Rabbit = new Rabbit(0.7, EColorRabbit.BROWN, 0.5, 4.3, 4.5);
  private rabbitList: Rabbit[] = [this.bunny1, this.bunny2, this.bunny3, this.bunny4];

  private terrier1: Terrier = new Terrier(1, 1, false);
  private terrier2: Terrier = new Terrier(2, 2, false);
  private terrier3: Terrier = new Terrier(3, 3, false);
  private terrier4: Terrier = new Terrier(4, 4, false);
  private terrierList : Terrier[] = [this.terrier1, this.terrier2, this.terrier3, this.terrier4];

  private forest: Forest = new Forest(this.terrierList, this.rabbitList, 1000, 100);

  private hunter: Hunter = new Hunter(8, 6, 0, 5, 5);
  
  private texteArea!: Element;

  private intervalID: any;

  private rabbit1Saved: Boolean = false;
  private rabbit2Saved: Boolean = false;
  private rabbit3Saved: Boolean = false;
  private rabbit4Saved: Boolean = false;

  constructor( ) { }

  ngOnInit(): void {
    this.texteArea = document.querySelector("#idTexteArea") as Element;
  }

  start(): void{
    this.intervalID = setInterval(() => this.Play(), 1000); 
  }

  private getDistance(x1: number, y1: number, x2: number, y2: number): number{
    let result =  Math.round((Math.sqrt((x2-x1)*(x2-x1) + (y2 - y1)*(y2 - y1))*1000)); 
    return result;
  }

  private setRabbitSaved(i: number): void{
    switch (i) {
      case 1:
        this.rabbit1Saved = true;       
        break;
      case 2:
        this.rabbit2Saved = true;       
        break;
      case 3:
        this.rabbit3Saved = true;       
        break;
      case 4:
        this.rabbit4Saved = true;       
        break;
    
      default:
        break;
    }

  }
  private AllRabitSaved(): Boolean{
    return this.rabbit1Saved && this.rabbit2Saved && this.rabbit3Saved && this.rabbit4Saved;
  } 

  private changeRabbitPosition(index: number, rabbit: Rabbit): void{
    const DIST = 0.15;
    if (rabbit.x > index )
      rabbit.x = rabbit.x - rabbit.velocity* DIST;
    else
     rabbit.x = rabbit.x + rabbit.velocity* DIST;

    if (rabbit.y > index )
      rabbit.y = rabbit.y - rabbit.velocity* DIST;
    else
      rabbit.y = rabbit.y + rabbit.velocity* DIST;
  }

  private Play(){
    

    let distHunter: number = 0;
    let distTerrier1: number = 0;
    let distTerrier2: number = 0;
    let distTerrier3: number = 0;
    let distTerrier4: number = 0;

    for (let index = 0; index < this.rabbitList.length; index++) {

      let i = index+1;
      if (index == 0 && this.rabbit1Saved) continue;
      if (index == 1 && this.rabbit2Saved) continue;
      if (index == 2 && this.rabbit3Saved) continue;
      if (index == 3 && this.rabbit4Saved) continue;
  
      let rabbit = this.rabbitList[index]   

      distHunter = this.getDistance(rabbit.x, rabbit.y, this.hunter.x, this.hunter.y );

      distTerrier1 = this.getDistance(rabbit.x, rabbit.y, this.terrier1.x, this.terrier1.y );
      distTerrier2 = this.getDistance(rabbit.x, rabbit.y, this.terrier2.x, this.terrier2.y );
      distTerrier3 = this.getDistance(rabbit.x, rabbit.y, this.terrier3.x, this.terrier3.y );
      distTerrier4 = this.getDistance(rabbit.x, rabbit.y, this.terrier4.x, this.terrier4.y );

      if (distHunter < 500)
      this.texteArea.innerHTML += "Le chasseur est à " +  distHunter + " mètres du lapin "  + i + " \n";
      if (distTerrier1 < 500)
      this.texteArea.innerHTML += "Le lapin " + i + " est à " + distTerrier1 + " mètres du terrier 1"+ " \n";
      if (distTerrier2 < 500)
      this.texteArea.innerHTML += "Le lapin " + i + " est à " + distTerrier2 + " mètres du terrier 2"+ " \n";
      if (distTerrier3 < 500)
      this.texteArea.innerHTML += "Le lapin " + i + " est à " + distTerrier3 + " mètres du terrier 3"+ " \n";
      if (distTerrier4 < 500)
      this.texteArea.innerHTML += "Le lapin " + i + " est à " + distTerrier4 + " mètres du terrier 4"+ " \n";

      if (distHunter < 100){
        clearInterval(this.intervalID); 
        this.texteArea.innerHTML += "Le lapin " + i + " est mort !\n"
      }

      if (distHunter < 300){
        this.hunter.hunt();
        if (this.hunter.bullet == 0) {
          clearInterval(this.intervalID); 
          this.texteArea.innerHTML += "Le chasseur n'a plus de balle ! \n"
        } 
      }

      if (distTerrier1  < 200 && !this.terrier1.occupied) {
        this.texteArea.innerHTML += "Le lapin " + i + " s'est refugié dans le terrier 1 \n";
        this.terrier1.occupied = true;
        this.setRabbitSaved(i);     
      }
      if (distTerrier2  < 200 && !this.terrier2.occupied) {
        this.texteArea.innerHTML += "Le lapin " + i + " s'est refugié dans le terrier 2 \n";
        this.terrier2.occupied = true;
        this.setRabbitSaved(i);        
      }
      if (distTerrier3  < 200 && !this.terrier3.occupied) {
        this.texteArea.innerHTML += "Le lapin " + i + " s'est refugié dans le terrier 3\n";
        this.terrier3.occupied = true;
        this.setRabbitSaved(i);      
      }
      if (distTerrier4  < 200 && !this.terrier4.occupied) {
        this.texteArea.innerHTML += "Le lapin " + i + " s'est refugié dans le terrier 4\n";
        this.terrier4.occupied = true;        
        this.setRabbitSaved(i);        
      }       

      this.changeRabbitPosition(index, rabbit);
 
      if (this.AllRabitSaved())
      {
        this.texteArea.innerHTML += "\nTous les lapins sont sauvés !\n";
        clearInterval(this.intervalID); 
        break;
      }
    }; // end for


    this.texteArea.innerHTML += "\n"; 
    }
  

}
