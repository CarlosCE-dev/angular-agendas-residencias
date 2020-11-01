import { Injectable } from '@angular/core';
import { Agenda } from '../model/agenda';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://192.168.0.7:62483/api/agenda";

  constructor(
    private http: HttpClient
  ) { }

  getAgendasFromApi(): Promise<Agenda[]> {
    return new Promise(resolve => {
      this.http.get<Agenda[]>(`${this.url}`).subscribe( data => {
            resolve( data );
        }, err => {
          console.warn(err);
        });
    });
  }

  addAgendaToApi( agenda:Agenda ): Promise<Agenda> {
    return new Promise(resolve => {
      this.http.post<Agenda>(`${this.url}/create`, agenda ).subscribe( data => {
            resolve( data );
        }, err => {
          console.warn(err);
        });
    });
  }

  deleteAgendaFromApi( id:number ): Promise<boolean> {
    return new Promise(resolve => {
      this.http.post(`${this.url}/delete`, id ).subscribe( (_) => {
            resolve( true );
        }, err => {
          resolve( false );
          console.warn(err);
        });
    });
  }

  editAgendaFromApi( agenda:Agenda ): Promise<boolean> {
    return new Promise(resolve => {
      this.http.post(`${this.url}/edit`, agenda ).subscribe( (_) => {
            resolve( true );
        }, err => {
          resolve( false );
          console.warn(err);
        });
    });
  }

 
}
