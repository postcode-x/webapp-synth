import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  synth : any;
  msdown : boolean = false;

  constructor() {
    this.synth = new Tone.Synth().toDestination();
  }

  ngOnInit(): void {
  }

  msover(note : string) {
    if (this.msdown) {
      this.play(note);
    }
  }

  play(note :string) {
    this.synth.triggerAttackRelease(note, '8n');
  }

}
