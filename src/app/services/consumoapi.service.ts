import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }

  url: string = 'http://127.0.0.1:5000/';

  getAlumnoCurso(idProfesor:number,idCurso:number){
    return this.http.get<any>(this.url + '/profesores/' + idProfesor + '/cursos/' + idCurso)
  }

  login(usuario: string, pass: string) {Observable<any>
    const body = {
      user: usuario,
      password: pass
    };

    return this.http.post<any>(this.url + "login", body, { ...this.httpOptions, observe: 'response' });
  }
  
  constructor(private http:HttpClient) {}

  }