import { Component,OnInit,HostListener  } from '@angular/core';
import{EposTransactionRepository} from "./epostransactionRepository";
import { Cart } from './cart';
@Component({
    selector: 'till-component',
    templateUrl: './till.component.html'
  })
export class TillComponent{
  constructor(private cart:Cart,private eRepo:EposTransactionRepository){}
  ngOnInit(){
    this.focusTill();
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) 
  { 
    if(event.keyCode==13)
    {
      if(!this.eRepo.apiBusy)
      {
        if(this.cart.journalInput!="")
        {
          let id=this.cart.journalInput;
          this.cart.journalInput="";
          if(this.cart.orderTypeText!="")
          {
            if(this.cart.slipNo==0){
                this.eRepo.createTransactionAndinsertTransLineFromItemNo(id);
            }
            else
            {
                this.eRepo.insertTransLineFromItemNo(id);
            }
          }
          else
          {
            this.cart.isError=true;
            this.cart.journalText="Please select the order type!";
          }
        }
      }
      this.focusTill();
    }else{
      this.cart.journalInput=this.cart.journalInput+event.key;
    }
  }
  focusTill(){
        this.cart.focusTill();
  }
}