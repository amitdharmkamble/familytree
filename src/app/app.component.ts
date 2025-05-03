import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatorService } from './services/creator.service';
import { FormsModule } from '@angular/forms';
import { CreateCreatorRequest } from './interfaces/CreateCreatorRequest';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private creatorService: CreatorService) { }
  title = 'familytree';
  firstName: string = '';
  lastName: string = '';

  createCreator() {
    const creatorRequest: CreateCreatorRequest = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.creatorService.CreateCreator(creatorRequest);
  }
}
