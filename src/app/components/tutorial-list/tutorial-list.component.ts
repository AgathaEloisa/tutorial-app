import { Component, OnInit } from '@angular/core';

interface TutorialDetail {
  title: string;
  speaker: string;
/*   date: Date; */
  date: string;
}

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  tutorialDetail: TutorialDetail[] = [
    {
      title: 'Curso Node JS',
      speaker: 'Felipe Nieto',
      date: '20 sep.2020'
    },
    {
      title: 'Testing React with Enzime',
      speaker: 'Juan Morán',
      date: '25 sep. 2020'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
