import { Component,OnInit,HostListener  } from '@angular/core';
import { Cart } from './cart';
@Component({
    selector: 'till-component',
    templateUrl: './till.component.html'
  })
export class TillComponent{
  constructor(private cart:Cart){}
  ngOnInit(){
    this.focusTill();
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    
    if(event.keyCode==13){
      //this.cart.journalInput=this.input;
    }else{
      this.cart.journalInput=this.cart.journalInput+event.key;
    }
  }
  focusTill(){
        this.cart.focusTill();
  }
}