import { Component } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { FormsModule } from '@angular/forms';
import { CreateCreatorRequest } from '../../interfaces/CreateCreatorRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcreatorcomponent',
  imports: [FormsModule],
  templateUrl: './createcreator.component.html',
  styleUrl: './createcreator.component.css',
  standalone:true
})
export class CreatecreatorComponent {
  constructor(private _creatorService: CreatorService, private _router: Router) { }
  title = 'familytree';
  firstName: string = '';
  lastName: string = '';
  result: any = null

  async createCreator() {
    if (!this.firstName || !this.lastName) {
      alert('Please fill in both first name and last name.');
      return;
    }
    const creatorRequest: CreateCreatorRequest = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    try {
      this.result = await this._creatorService.CreateCreator(creatorRequest);
      this._router.navigate(['/familytreebuilder'], { queryParams: { creatorId : this.result.createdCreatorId} });
    } catch (error) {
      console.error('Error creating creator:', error);
    }
  }
}
