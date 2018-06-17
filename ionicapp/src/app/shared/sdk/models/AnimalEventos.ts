/* tslint:disable */
import {
  Animal
} from '../index';

declare var Object: any;
export interface AnimalEventosInterface {
  "nome": string;
  "tipo"?: string;
  "data"?: Date;
  "id"?: any;
  "animalId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  animal?: Animal;
}

export class AnimalEventos implements AnimalEventosInterface {
  "nome": string;
  "tipo": string;
  "data": Date;
  "id": any;
  "animalId": any;
  "createdAt": Date;
  "updatedAt": Date;
  animal: Animal;
  constructor(data?: AnimalEventosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnimalEventos`.
   */
  public static getModelName() {
    return "AnimalEventos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnimalEventos for dynamic purposes.
  **/
  public static factory(data: AnimalEventosInterface): AnimalEventos{
    return new AnimalEventos(data);
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
      name: 'AnimalEventos',
      plural: 'AnimalEventos',
      path: 'AnimalEventos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "animalId": {
          name: 'animalId',
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
        animal: {
          name: 'animal',
          type: 'Animal',
          model: 'Animal',
          relationType: 'belongsTo',
                  keyFrom: 'animalId',
          keyTo: 'id'
        },
      }
    }
  }
}
