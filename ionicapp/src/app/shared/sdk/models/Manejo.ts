/* tslint:disable */
import {
  Piquete,
  Animal
} from '../index';

declare var Object: any;
export interface ManejoInterface {
  "data": Date;
  "tempoPrevisto"?: number;
  "estacao": string;
  "tempoRecuperacao"?: Date;
  "animaisSimplificado"?: Array<any>;
  "cabecas"?: number;
  "UA"?: number;
  "id"?: any;
  "origemId"?: any;
  "destinoId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  origem?: Piquete;
  destino?: Piquete;
  animais?: Animal[];
}

export class Manejo implements ManejoInterface {
  "data": Date;
  "tempoPrevisto": number;
  "estacao": string;
  "tempoRecuperacao": Date;
  "animaisSimplificado": Array<any>;
  "cabecas": number;
  "UA": number;
  "id": any;
  "origemId": any;
  "destinoId": any;
  "createdAt": Date;
  "updatedAt": Date;
  origem: Piquete;
  destino: Piquete;
  animais: Animal[];
  constructor(data?: ManejoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Manejo`.
   */
  public static getModelName() {
    return "Manejo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Manejo for dynamic purposes.
  **/
  public static factory(data: ManejoInterface): Manejo{
    return new Manejo(data);
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
      name: 'Manejo',
      plural: 'manejos',
      path: 'manejos',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "tempoPrevisto": {
          name: 'tempoPrevisto',
          type: 'number',
          default: 0
        },
        "estacao": {
          name: 'estacao',
          type: 'string'
        },
        "tempoRecuperacao": {
          name: 'tempoRecuperacao',
          type: 'Date'
        },
        "animaisSimplificado": {
          name: 'animaisSimplificado',
          type: 'Array&lt;any&gt;'
        },
        "cabecas": {
          name: 'cabecas',
          type: 'number'
        },
        "UA": {
          name: 'UA',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "origemId": {
          name: 'origemId',
          type: 'any'
        },
        "destinoId": {
          name: 'destinoId',
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
        origem: {
          name: 'origem',
          type: 'Piquete',
          model: 'Piquete',
          relationType: 'belongsTo',
                  keyFrom: 'origemId',
          keyTo: 'id'
        },
        destino: {
          name: 'destino',
          type: 'Piquete',
          model: 'Piquete',
          relationType: 'belongsTo',
                  keyFrom: 'destinoId',
          keyTo: 'id'
        },
        animais: {
          name: 'animais',
          type: 'Animal[]',
          model: 'Animal',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'manejoId'
        },
      }
    }
  }
}
