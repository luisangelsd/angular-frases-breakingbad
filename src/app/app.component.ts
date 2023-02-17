import { Component, OnInit } from '@angular/core';
import { ApiBreakingService } from './servicios/api-breaking.service';
import { EntityFrase } from './entitys/entity-frase';
import { HttpErrorResponse, HttpResponse, HttpHeaders, HttpStatusCode, HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //-- Variables globales

  frase: EntityFrase[]=[new EntityFrase('Cargando...','Cargando...')];



  //-- Constructor
  constructor (
    private apiBreakingService: ApiBreakingService
  ){}
 


  //-- Obtener frase aleatoria
  public obtenerFraseAleatoria():void{
    this.frase=[new EntityFrase('Cargando...','Cargando...')];
    this.apiBreakingService.buscarFraseRandom().subscribe(
      HttpResponse => {
        this.frase=HttpResponse;
      },
      HttpErrorResponse=>{
        console.error(HttpErrorResponse);
      }
    )
  }

 
  ngOnInit(): void {
    this.obtenerFraseAleatoria();
  }
  

 
  
}
;