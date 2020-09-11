import { Component, OnInit } from '@angular/core';
import { TutorialListService } from '../../service/tutorial-list.service';

interface TutorialDetail {
  title: any;
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
  tutorialDetail: TutorialDetail[] = [];
  constructor( public tutorialList: TutorialListService ) {

  }

  ngOnInit(): any {
    this.tutorialList.getItems('https://rayentutorialtestapp.azurewebsites.net/tutorials').subscribe((res: any) => {

      this.tutorialDetail = [
        {
          title: res[0].nombre,
          speaker: res[0].profesor,
          date: res[0].fecha
        }
      ];
      console.log('res: ', res);
    });
  }

}
