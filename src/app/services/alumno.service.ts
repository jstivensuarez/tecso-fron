import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Alumno } from '../dto/alumno';

@Injectable({
  providedIn: 'root'
})


export class AlumnoService {

  readonly endpoint = 'http://localhost:50597/api/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<any> {
    debugger;
    return this.http.get(this.endpoint + 'alumnos').pipe(
      map(this.extractData));
  }
  
  getAlumno(id): Observable<any> {
    return this.http.get(this.endpoint + 'alumnos/' + id).pipe(
      map(this.extractData));
  }
  
  addAlumno(alumno: Alumno): Observable<Alumno> {
    debugger;
    console.log(alumno);
    return this.http.post<Alumno>(this.endpoint + 'alumnos', alumno, this.httpOptions).pipe(
      tap((alumno) => console.log('Alumno agregado')),
      catchError(this.handleError<any>('addAlumno'))
    );
  }
  
  updateAlumno(id, alumno): Observable<Alumno> {
    return this.http.put(this.endpoint + 'alumnos/' + id, alumno, this.httpOptions).pipe(
      tap((alumno) => console.log('Alumno actualizado')),
      catchError(this.handleError<any>('updateAlumno'))
    );
  }

  private extractData(res: Response) {
    debugger;
    let body = res;
    return body || null;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    debugger;
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
