import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityFrase } from '../entitys/entity-frase';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiBreakingService {
  //-- Variables globales
  private urlEndPoint="https://api.breakingbadquotes.xyz/v1";
 
  
  //-- Buscar frase eleatoriamente
  public buscarFraseRandom(): Observable<EntityFrase[] >{
    return this.http.get(this.urlEndPoint+"/quotes").pipe(
      map( (respuesta) => respuesta as EntityFrase[] )
      ,catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Constructor
  constructor(
    private http: HttpClient
  ) { }
}
