import { Component } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { CreatorResponse } from '../../interfaces/CreatorResponse';
import { DtreeFamilyTreeComponent } from '../dtree-family-tree/dtree-family-tree.component';

@Component({
  selector: 'app-familytreebuilder',
  templateUrl: './familytreebuilder.component.html',
  styleUrl: './familytreebuilder.component.css',
  imports: [DtreeFamilyTreeComponent],
})
export class FamilytreebuilderComponent {

  constructor(private _creatorService: CreatorService) { }

  creator: CreatorResponse = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null
  };

  ngOnInit() {
    const urlParams = new URLSearchParams(globalThis.window.location.search);
    const creatorId = urlParams.get('creatorId');

    if (creatorId) {
      this._creatorService.GetCreatorById(creatorId).then((response) => {
        this.creator = response;
        console.log('Creator:', this.creator);
      }).catch((error) => {
        console.error('Error:', error);
      });
    } else {
      console.error('No creator ID found in URL');
    }
  }
}
