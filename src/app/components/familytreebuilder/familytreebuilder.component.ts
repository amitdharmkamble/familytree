import { Component } from '@angular/core';
import { CreatorService } from '../../services/creator.service';

@Component({
  selector: 'app-familytreebuilder',
  imports: [],
  templateUrl: './familytreebuilder.component.html',
  styleUrl: './familytreebuilder.component.css'
})
export class FamilytreebuilderComponent {

  constructor(private _creatorService: CreatorService) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(globalThis.window.location.search);
    const creatorId = urlParams.get('creatorId');

    if (creatorId) {
      this._creatorService.GetCreatorById(creatorId).then((response) => {
      }).catch((error) => {
        console.error('Error:', error);
      });
    } else {
      console.error('No creator ID found in URL');
    }
  }
}
