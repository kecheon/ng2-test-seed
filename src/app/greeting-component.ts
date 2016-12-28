import {Component} from '@angular/core';
import {UserService} from './user-service';

@Component({
  selector: 'my-greeting',
  template: `
    <input #pinbox placeholder="1111" type="number"/>
    <button (click)="enter(pinbox.value)" class="btn btn-primary">Enter</button>
    <h3>Status: {{greeting}}</h3>
  `,
  styles :[`
  `]
})
export class GreetingComponent {
  greeting: string = 'Enter PIN';
  pending: Promise<void>;

  constructor(public user: UserService) {
  }

  enter(pin: string) {
    this.user.pin = parseInt(pin);
    this.greeting = 'Processing...';
    this.pending = this.user.getGreeting().then((greeting) => {
      this.greeting = greeting;
    });
  }
}
