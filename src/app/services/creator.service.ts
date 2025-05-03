import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCreatorRequest } from '../interfaces/CreateCreatorRequest';

@Injectable({
  providedIn: 'root'
})

export class CreatorService {
  constructor(private http: HttpClient) { }

  CreateCreator(createCreatorRequest: CreateCreatorRequest) {
    this.http.get('https://localhost:7159/')
      .subscribe()
  }

}
