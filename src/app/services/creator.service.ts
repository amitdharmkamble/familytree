import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCreatorRequest } from '../interfaces/CreateCreatorRequest';

@Injectable({
  providedIn: 'root'
})

export class CreatorService {
  constructor(private http: HttpClient) { }

  async CreateCreator(createCreatorRequest: CreateCreatorRequest): Promise<any> {
    try {
      const response = await 
            this.http.post('https://localhost:7159/api/createcreator?firstname=' + createCreatorRequest.firstName + '&lastname=' + createCreatorRequest.lastName, createCreatorRequest)
            .toPromise();
      console.log('Creator created successfully:', response);
      return response;
    } catch (error) {
      console.error('Error creating creator:', error);
      throw error;
    }
  }

  async GetCreatorById(creatorId: string): Promise<any> {
    try {
      const response = await 
              this.http.get('https://localhost:7159/api/getcreatorbyid?creatorId=' + creatorId)
              .toPromise();
      console.log('Creator retrieved successfully:', response);
      return response;
    } catch (error) {
      console.error('Error retrieving creator:', error);
      throw error;
    }
  }

}
