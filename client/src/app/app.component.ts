import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = {
    'August 2016': [
      {date: '2016-08-01', sentence: 'Axel DELAMARRE moved from <a>#Paris</a> to <a>#New York</a>'},
      {date: '2016-08-01', sentence: 'Axel DELAMARRE is now <a>#VIE</a> (previously <a>#Ingénieur Financier</a>)'},
      {date: '2016-08-01', sentence: 'Marine ARZIC joined SG as <a>#VIE</a>'},
    ],
    'September 2016': [
      {date: '2016-09-03', sentence: 'Jerome MARTINAUD moved from <a>#Hong-Kong</a> to <a>#New York</a>'},
    ],
    'October 2016': [
      {date: '2016-10-01', sentence: 'Hanine ADJOU moved from <a>#Paris</a> to <a>#New York</a>'},
      {date: '2016-10-01', sentence: 'Hanine ADJOU is now <a>#VIE</a> (previously <a>#Front-Office Developer</a>)'},      
    ],
    'January 2017': [
      {date: '2017-01-01', sentence: 'Simon LETORT is now <a>#Chief Digital Officer</a> (previously <a>#Head of Financial Engineering</a>)'},
      {date: '2017-01-01', sentence: 'Julien GIMBRERE is now <a>#Head of Financial Engineering</a> (previously <a>#Head of Structuring</a>)'},      
    ],
    'May 2017': [
      {date: '2017-05-03', sentence: 'Rodrigo FERNANDEZ left'},
      {date: '2017-05-03', sentence: 'Ganesh BANDHARI now reports to Nathanael BIENVENU'},      
    ],
    'June 2017': [
      {date: '2017-06-06', sentence: 'Sandhya SRIRAMAN joined SG as <a>#Intern I</a>'},      
    ],
  };

  public getMonths() {
    return Object.keys(this.events);
  }

  public getDayOfMonth(event) {
    return new Date(event.date.replace(/-/g, '/')).getDate()
  }
}
