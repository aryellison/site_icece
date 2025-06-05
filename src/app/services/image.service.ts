import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get('/assets/data/images.json');
  }

  getImageById(id: string): Observable<any> {
    return this.getImages().pipe(
      map((data: any) => data.images.find((img: any) => img.id === id))
    );
  }
}
