import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe1Component } from './exe1/exe1.component';
import { Exe2Component } from './exe2/exe2.component';
import { Exe3Component } from './exe3/exe3.component';


import { Exe4Component } from './exe4/exe4.component';
import { FormReceiptComponent } from './form-receipt/form-receipt.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'home', component: HomeComponent },
  {path:'Exe1', component: Exe1Component },
  {path:'Exe2', component: Exe2Component},
  {path:'Exe3', component: Exe3Component},
  {path:'Exe4', component: Exe4Component },
  {path:'updateReceipt/:id', component: FormReceiptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
