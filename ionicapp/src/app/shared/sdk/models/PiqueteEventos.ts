/* tslint:disable */
import {
  Piquete
} from '../index';

declare var Object: any;
export interface PiqueteEventosInterface {
  "tipo": string;
  "nome": string;
  "data"?: Date;
  "agendamento"?: Date;
  "id"?: any;
  "piqueteId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  piquete?: Piquete;
}

export class PiqueteEventos implements PiqueteEventosInterface {
  "tipo": string;
  "nome": string;
  "data": Date;
  "agendamento": Date;
  "id": any;
  "piqueteId": any;
  "createdAt": Date;
  "updatedAt": Date;
  piquete: Piquete;
  constructor(data?: PiqueteEventosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PiqueteEventos`.
   */
  public static getModelName() {
    return "PiqueteEventos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PiqueteEventos for dynamic purposes.
  **/
  public static factory(data: PiqueteEventosInterface): PiqueteEventos{
    return new PiqueteEventos(data);
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
      name: 'PiqueteEventos',
      plural: 'PiqueteEventos',
      path: 'PiqueteEventos',
      idName: 'id',
      properties: {
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "agendamento": {
          name: 'agendamento',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "piqueteId": {
          name: 'piqueteId',
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
        piquete: {
          name: 'piquete',
          type: 'Piquete',
          model: 'Piquete',
          relationType: 'belongsTo',
                  keyFrom: 'piqueteId',
          keyTo: 'id'
        },
      }
    }
  }
}
