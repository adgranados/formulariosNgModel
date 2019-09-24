import { Persona } from './persona';

export class Apartamento {
  public interior:string;
  public numero:string;

  public residentes:Array<Persona>;

  public constructor(){
    this.residentes = new Array<Persona>();
  }
}
