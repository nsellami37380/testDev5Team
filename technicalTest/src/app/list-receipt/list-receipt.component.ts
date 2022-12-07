import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/models/receipt.model';
import { ReceiptService } from '../shared/receipt.service';

@Component({
  selector: 'app-list-receipt',
  templateUrl: './list-receipt.component.html',
  styleUrls: ['./list-receipt.component.scss']
})
export class ListReceiptComponent implements OnInit {


  receiptList: Receipt[] = [];
  // dateS: string = this.datepipe.transform(this.receipt.date, 'yyyy-MM-dd') as string;
  
  constructor(private receiptS: ReceiptService,private datepipe: DatePipe) { 
    this.receiptList = this.receiptS.getReceiptList();
  }
  
  ngOnInit(): void {
  }
  deleteReceipt(id: number){
    this.receiptS.deleteReceipt(id)
  }
  updateReceipt(receipt: Receipt){
    this.receiptS.updateReceipt(receipt)
  }
  format(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') as string;
  }
}