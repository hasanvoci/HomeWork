import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  inputValue !: String;
  isDisabled : boolean = true;

  HasInput(event: Event){
    if(this.inputValue !== '' || this.inputValue !== null)
    this.isDisabled=false
  }

  ResetButton(event: any){
    this.isDisabled=true
    this.inputValue = '';
  }

}
