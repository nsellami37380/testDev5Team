import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Receipt } from 'src/models/receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private receiptlist: Receipt[] = [];
  constructor(private router: Router) { }

  public addReceipt(receipt: Receipt): Boolean{
    if (this.receiptlist.length > 0 )
    {
      let receiptListDate: Receipt[] = this.receiptlist.filter(recpt  => recpt.date.getDate() == receipt.date.getDate())

      
      if (receiptListDate.length >0 ) return false

      let lastReceipt: Receipt = this.receiptlist[0]
      receipt.id = lastReceipt.id++;
    } else receipt.id = 1;
    this.receiptlist.push({... receipt});
    console.log(JSON.stringify(this.receiptlist));
    return true;
  }

  public getReceiptList(): Receipt[]{
    return this.receiptlist;
  }

  private removeObjectWithId(arr : Array<any>, id: number) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);
  
    return arr;
  }
  public deleteReceipt(id: number): void{
    this.removeObjectWithId(this.receiptlist, id)
  }
  public updateReceipt(receipt: Receipt): Boolean{
    let receiptToUpdate : Receipt = {...this.getreceiptById(receipt.id)}
    console.log(JSON.stringify(receiptToUpdate));
    
    this.removeObjectWithId(this.receiptlist, receipt.id)
    if (this.addReceipt(receipt)) {    
      this.router.navigate(['/Exe3']);
      return true
    }  else {
      this.receiptlist.push(receiptToUpdate);
      return false;
    }
  }

  public getreceiptById(id: number): Receipt{
    return this.receiptlist.find(receipt => receipt.id == id) as Receipt
  }
}
