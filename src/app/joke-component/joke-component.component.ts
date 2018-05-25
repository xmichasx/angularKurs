import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-component',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.css'],
})
export class JokeComponentComponent implements OnInit {
  setup: string;
  punchline: string;

  constructor() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (Hello Me)";
  }

  ngOnInit() {
  }

}
