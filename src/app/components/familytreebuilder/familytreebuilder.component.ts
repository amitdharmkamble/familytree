import { Component } from '@angular/core';

@Component({
  selector: 'app-familytreebuilder',
  imports: [],
  templateUrl: './familytreebuilder.component.html',
  styleUrl: './familytreebuilder.component.css'
})
export class FamilytreebuilderComponent {
  //Write Onload method
  ngOnInit() {
    console.log('Family Tree Builder Component Loaded');
  }
}
