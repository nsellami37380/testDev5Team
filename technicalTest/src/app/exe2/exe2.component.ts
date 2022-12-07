import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe2',
  templateUrl: './exe2.component.html',
  styleUrls: ['./exe2.component.scss']
})
export class Exe2Component implements OnInit {

  textTiDisplayWithngModel: string = "texte initial";

  constructor() { }

  ngOnInit(): void {
  }

  selectfile(event: any): void{
    this.textTiDisplayWithngModel = "1";
    var reader = new FileReader();
    reader.readAsText(event.target.files[0]);   
    reader.onload = (event: any) =>  {
        this.textTiDisplayWithngModel
        let texteArea = document.querySelector("#idTexteArea");
        if (texteArea)  {
          let textToDisplay : string = reader.result as string;
          var arrayOfString = textToDisplay.split(" ")
          texteArea.innerHTML = "";
          arrayOfString.forEach(element => {
            if (texteArea ) texteArea.innerHTML += element + "\n"; 
            this.textTiDisplayWithngModel += element + "\n";          
          });          
        }
    };
   }

}
