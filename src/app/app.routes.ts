import { Routes } from '@angular/router';
import { FamilytreebuilderComponent } from './components/familytreebuilder/familytreebuilder.component';
import { CreatecreatorComponent } from './components/createcreatorcomponent/createcreator.component';

export const routes: Routes = [
    { path: "", component: CreatecreatorComponent },
    { path: 'familytreebuilder', component: FamilytreebuilderComponent }
];
