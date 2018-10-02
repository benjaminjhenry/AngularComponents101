import { Component } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  //template: '<h1>Here is html.</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35%)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1})
      ]))),
    ]),
  ]
})
export class AppComponent {

  state: string = 'small';



  title = 'My Application';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  myObject = {
    name: 'Ben',
    gender: 'male',
    age: 38,
    location: 'USA'
  }

  angularLogo = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  myArr = ['ours','mine','yours'];
}
