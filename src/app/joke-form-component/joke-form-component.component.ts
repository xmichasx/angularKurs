import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-form-component',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  constructor() { }

  ngOnInit() {
  }

}
