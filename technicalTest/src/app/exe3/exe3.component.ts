import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe3',
  templateUrl: './exe3.component.html',
  styleUrls: ['./exe3.component.scss']
})
export class Exe3Component implements OnInit {

  textTiDisplayWithngModel: string = "texte initial";

  constructor() { }

  ngOnInit(): void {
  }

  selectfile(event: any): void{
    var reader = new FileReader();
    reader.readAsText(event.target.files[0]);   
    reader.onload = (event: any) =>  {
        let texteArea = document.querySelector("#idTexteArea") as Element;
        let textToDisplay : string = reader.result as string;
        var arrayOfString = textToDisplay.split(/[.\s']+/)
        texteArea.innerHTML = "";
        arrayOfString.forEach(element => {
          if (texteArea ) texteArea.innerHTML += element + "\n";                     
        });
    };
   }
}
