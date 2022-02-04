import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JardinService {

  /*jardins: any[] = [
    {
      id: 0,
      nom: 'jardin 1',
      description: 'le plus grand',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      zones: [
        {
          id: 0,
          nom: 'Zone 1',
          description: 'Zone Nana menthe',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        }

      ]
    },
    {
      id: 1,
      nom: 'jardin 2',
      description: 'le plus grand',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      zones: [
        {
          id: 0,
          nom: 'Zone 1',
          description: 'Zone Nana menthe',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: '',
          devices: 'devices'
        }

      ]

    },
    {
      id: 2,
      nom: 'jardin 3',
      description: 'le plus grand',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      zones: [
        {
          id: 0,
          nom: 'Zone 1',
          description: 'Zone Nana menthe',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: '',
          devices: 'devices'
        }

      ]

    }
  ]*/

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  addLocation(location: Location): Observable<any>{
    console.log("options",this.httpOptions)
    return this.http.post<Location>
      (`${API_URL}/location`, location, this.httpOptions)
      .pipe(
        catchError(this.handleError<Location>('Add Location'))
      );
  }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  
  getLocation(id: any): Observable<Location> {
    return this.http.get<Location>(`${API_URL}/location/` + id)
      .pipe(
        tap(_ => console.log(`Location fetched: ${id}`)),
        catchError(this.handleError<Location>(`Get Location id=${id}`))
      );
  }


  getLocationsList(): Observable<any[]> {
    return this.http.get<Location[]>(`${API_URL}/locations`)
      .pipe(
        tap(locations => console.log('Locationss fetched!')),
        catchError(this.handleError<Location[]>('Get Location', []))
      );
  }

  updateLocation(id:any, location: Location): Observable<any> {
    return this.http.put(`${API_URL}/location/`  + id, location, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Location updated: ${id}`)),
        catchError(this.handleError<Location[]>('Update Location'))
      );
  }

  getJardin(id: any){

  }
  getJardins(): any {
    return null
  }

}
