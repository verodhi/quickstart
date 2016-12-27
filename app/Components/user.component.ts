import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `
  <h1>{{name}}</h1>
  <p>Email: {{email}}</p>
  <p>{{address.street}} {{address.city}} {{address.state}}</p>
  <button (click) = "toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf = "showHobbies">
  <h3>Hobbies</h3>
  <ul>
      <li *ngFor = "let hobby of hobbies">
      {{hobby}}
      </li>
  </ul>
  </div>
  <form>
        <label>Name: </label><br />
        <input type="text" name = "name" [(ngModel)] = "name" />
  </form>
  `,

})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        this.name = 'John Doe';
        this.email = 'shurav@hotmail.com';
        this.address = {
            street: '120 Main Street',
            city: 'Minneapolis',
            state: 'Minnesota'
        }
        this.hobbies = ['Music', 'Movies', 'Sports']
        this.showHobbies = false;
    }
    toggleHobbies(){
        if (this.showHobbies == false){

            this.showHobbies = true;
        }
        else{
            this.showHobbies = false;
        }
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}