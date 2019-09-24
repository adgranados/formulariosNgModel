import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/persona';
import { Apartamento } from '../Models/apartamento';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor() { }
  public persona1:Persona;
  public nuevoResidente:Persona;
  ngOnInit() {
    this.nuevoResidente = new Persona();
    this.nuevoResidente.tipo_documento = "CE";

    this.persona1 = new Persona();
    this.persona1.tipo_documento = "CC";
    this.persona1.numero_documento = "1010188564";
    this.persona1.primer_nombre = "Lucero";
    this.persona1.primer_nombre = "Vivas";
    this.persona1.segundo_apellido = "Soto";

    let apartamento:Apartamento = new Apartamento();
    apartamento.interior = "1";
    apartamento.numero = "101";


    this.persona1.apartamento = apartamento;
  }

  public agregarResidente(){
    /*
    const residente = new Persona();
    residente.tipo_documento ="CE";
    residente.numero_documento ="1018408050";
    residente.primer_apellido = "Jimenez";
    residente.primer_nombre = "Daniel";
    */
    //console.log(residente);
    this.persona1.apartamento.residentes.push(this.nuevoResidente);
    this.nuevoResidente = new Persona();
    this.nuevoResidente.tipo_documento = "CE";
  }
  public editarResidente(residente:Persona){
    this.nuevoResidente = residente;
  }

}
