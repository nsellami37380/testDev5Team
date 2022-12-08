import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Receipt } from 'src/models/receipt.model';
import { ReceiptService } from '../shared/receipt.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-form-receipt',
  templateUrl: './form-receipt.component.html',
  styleUrls: ['./form-receipt.component.scss']
})
export class FormReceiptComponent implements OnInit {

  titleReceipt: string = "Ajouter un ticket";
  dateOK: Boolean = true;
  receipt: Receipt = new Receipt(0, new Date(), "",0);
  dateS: string = this.datepipe.transform(this.receipt.date, 'yyyy-MM-dd') as string;
  textBtnSubmit: string = "Ajouter"
  constructor(private receiptS: ReceiptService,private route: ActivatedRoute,
    private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap)=>{
      
      if (param.get('id') != null)
      {
        this.titleReceipt = "modifier un ticket";
        let id =  parseInt( param.get('id') as string);
        this.receipt = {...this.receiptS.getreceiptById(id)};
        this.dateS = this.datepipe.transform(this.receipt.date, 'yyyy-MM-dd') as string;
        this.textBtnSubmit = "Modifier";
      } else{
       this.receipt = new Receipt(0, new Date(), "",0);
      }
  })

}
  
  addReceipt(){
    this.receipt.date = new Date(this.dateS);
    if (this.receipt.id == 0){

      if ( !this.receiptS.addReceipt(this.receipt)) 
        this.dateOK = false 
      else
        {
          this.receipt.id = 0
          this.dateOK = true
        }
    }
    else{
      if (!this.receiptS.updateReceipt(this.receipt)) this.dateOK = false; else this.dateOK = true;
    }
  }
}
