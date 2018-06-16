/* tslint:disable */
import {
  Modulo,
  PiqueteEventos
} from '../index';

declare var Object: any;
export interface PiqueteInterface {
  "codigo"?: string;
  "nome": string;
  "coordenadas"?: Array<any>;
  "area"?: number;
  "tipo": string;
  "tipoCapim"?: string;
  "status": string;
  "animaisSimplificado"?: Array<any>;
  "tempoRecuperacao"?: number;
  "capacidadeUa"?: number;
  "UA"?: number;
  "cabecas"?: number;
  "historicoUa"?: Array<any>;
  "id"?: any;
  "moduloId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  modulo?: Modulo;
  eventos?: PiqueteEventos[];
}

export class Piquete implements PiqueteInterface {
  "codigo": string;
  "nome": string;
  "coordenadas": Array<any>;
  "area": number;
  "tipo": string;
  "tipoCapim": string;
  "status": string;
  "animaisSimplificado": Array<any>;
  "tempoRecuperacao": number;
  "capacidadeUa": number;
  "UA": number;
  "cabecas": number;
  "historicoUa": Array<any>;
  "id": any;
  "moduloId": any;
  "createdAt": Date;
  "updatedAt": Date;
  modulo: Modulo;
  eventos: PiqueteEventos[];
  constructor(data?: PiqueteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Piquete`.
   */
  public static getModelName() {
    return "Piquete";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Piquete for dynamic purposes.
  **/
  public static factory(data: PiqueteInterface): Piquete{
    return new Piquete(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Piquete',
      plural: 'piquetes',
      path: 'piquetes',
      idName: 'id',
      properties: {
        "codigo": {
          name: 'codigo',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "coordenadas": {
          name: 'coordenadas',
          type: 'Array&lt;any&gt;'
        },
        "area": {
          name: 'area',
          type: 'number'
        },
        "tipo": {
          name: 'tipo',
          type: 'string',
          default: 'extensivo'
        },
        "tipoCapim": {
          name: 'tipoCapim',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string',
          default: 'recuperacao'
        },
        "animaisSimplificado": {
          name: 'animaisSimplificado',
          type: 'Array&lt;any&gt;'
        },
        "tempoRecuperacao": {
          name: 'tempoRecuperacao',
          type: 'number'
        },
        "capacidadeUa": {
          name: 'capacidadeUa',
          type: 'number'
        },
        "UA": {
          name: 'UA',
          type: 'number'
        },
        "cabecas": {
          name: 'cabecas',
          type: 'number'
        },
        "historicoUa": {
          name: 'historicoUa',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "moduloId": {
          name: 'moduloId',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        modulo: {
          name: 'modulo',
          type: 'Modulo',
          model: 'Modulo',
          relationType: 'belongsTo',
                  keyFrom: 'moduloId',
          keyTo: 'id'
        },
        eventos: {
          name: 'eventos',
          type: 'PiqueteEventos[]',
          model: 'PiqueteEventos',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'piqueteId'
        },
      }
    }
  }
}
