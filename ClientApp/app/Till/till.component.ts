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
    console.log(event.key);
    if(event.keyCode==13){
      console.log("Yes");
   }
  }
  focusTill(){
        this.cart.focusTill();
  }
  onKey(event:KeyboardEvent){
      console.log("hello");
  }
}