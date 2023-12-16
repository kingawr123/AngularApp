import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../../models/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  getImages(): Observable<Image[]> {
    const limit = 30;
    const url = `${this.apiUrl}?_limit=${limit}`;
    return this.http.get<Image[]>(url);
  }

  getImageById(id: number): Observable<Image> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Image>(url);
  }

}
