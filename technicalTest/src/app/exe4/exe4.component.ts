import { Component, OnInit } from '@angular/core';
import { EColorRabbit } from 'src/models/enum/EColorRabbit.enum';
import { Forest } from 'src/models/forest.model';
import { Rabbit } from 'src/models/rabbit.model';
import { Terrier } from 'src/models/terrier.model';

@Component({
  selector: 'app-exe4',
  templateUrl: './exe4.component.html',
  styleUrls: ['./exe4.component.scss']
})
export class Exe4Component implements OnInit {

  private buny1: Rabbit = new Rabbit(15, EColorRabbit.WHITE, 0, 0, 0);
  private buny2: Rabbit = new Rabbit(15, EColorRabbit.WHITE, 0, 0, 0);
  private buny3: Rabbit = new Rabbit(15, EColorRabbit.WHITE, 0, 0, 0);
  private buny4: Rabbit = new Rabbit(15, EColorRabbit.WHITE, 0, 0, 0);

  private terrier1: Terrier = new Terrier(0, 0, false);
  private terrier2: Terrier = new Terrier(0, 0, false);

  private forest: Forest = new Forest([this.terrier1, this.terrier2], 
    [this.buny1, this.buny2, this.buny3, this.buny4], 1000, 100);

    
  constructor() { }

  ngOnInit(): void {
  }

}
