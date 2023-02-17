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
  mensajePersonalizado: String='';

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
        this.mensajePersonalizado='';
      },

      HttpErrorResponse=>{ 
        switch (HttpErrorResponse.status) {
          case 0:
            this.mensajePersonalizado=HttpErrorResponse.status+': Asegurate de estar conectado a Internet';
            break;
          default:
            this.mensajePersonalizado=HttpErrorResponse.status+": Intentalo nuevamente y/o recarga el navegador";
            break;
        }
        
      }
    )

  }//find

 
  ngOnInit(): void {
    this.obtenerFraseAleatoria();
  }
  

 
  
}
;