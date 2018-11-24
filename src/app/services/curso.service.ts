import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Alumno } from '../dto/alumno';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCursosByAlumnoId(alumnoId): Observable<any> {
    return this.http.get(environment.endpointCursos+'/'+alumnoId).pipe(
      map(this.extractData));
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || null;
  }
}
