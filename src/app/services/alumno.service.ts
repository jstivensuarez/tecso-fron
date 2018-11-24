import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Alumno } from '../dto/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AlumnoService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<any> {
    return this.http.get(environment.endpointAlumnos).pipe(
      map(this.extractData));
  }

  getAlumno(id): Observable<any> {
    return this.http.get(environment.endpointAlumnos + '/' + id).pipe(
      map(this.extractData));
  }

  addAlumno(student: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(environment.endpointAlumnos, student, this.httpOptions).pipe(
      tap(
        alumno=>{
          console.log("Alumno agregado");
        },
        error=>{
          this.handleError
        }
      ),
      catchError(this.handleError)
    );
  }

  updateAlumno(id, alumno): Observable<Alumno> {
    return this.http.put<Alumno>(environment.endpointAlumnos + '/' + id, alumno, this.httpOptions).pipe(
      tap(
        alumno=>{
          console.log("Alumno agregado");
        },
        error=>{
          this.handleError
        }
      ),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || null;
  }

  handleError(error: Response) {

    return Observable.throw(error);

  }
}
