import { Component } from '@angular/core';
import { tweets } from './app.fixture'

let fakeTweets = tweets.map(tweet => ({
  date: new Date(tweet.date.replace(/-/g, '/')),
  grouping: '',
  source: tweet.source,
}));

fakeTweets.forEach(tweet => {
  tweet.grouping = tweet.date.toLocaleString('en-us', { month: 'long' });
  let year = tweet.date.getFullYear();
  if (year < new Date().getFullYear()) {
    tweet.grouping += ' ' + tweet.date.getFullYear()
  }
})

function groupBy<T>(xs: T[], key: string): { string?: object[]; } {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tweets = groupBy(fakeTweets, 'grouping');

  public getGroups() {
    return Object.keys(this.tweets);
  }
}
