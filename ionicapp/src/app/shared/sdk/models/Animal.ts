/* tslint:disable */

declare var Object: any;
export interface AnimalInterface {
  "tipo": string;
  "raca": string;
  "categoria": string;
  "sexo": boolean;
  "etiqueta"?: string;
  "origem"?: string;
  "finalidade"?: string;
  "nascimento"?: Date;
  "peso"?: number;
  "status"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Animal implements AnimalInterface {
  "tipo": string;
  "raca": string;
  "categoria": string;
  "sexo": boolean;
  "etiqueta": string;
  "origem": string;
  "finalidade": string;
  "nascimento": Date;
  "peso": number;
  "status": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: AnimalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Animal`.
   */
  public static getModelName() {
    return "Animal";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Animal for dynamic purposes.
  **/
  public static factory(data: AnimalInterface): Animal{
    return new Animal(data);
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
      name: 'Animal',
      plural: 'Animals',
      path: 'Animals',
      idName: 'id',
      properties: {
        "tipo": {
          name: 'tipo',
          type: 'string',
          default: 'bovino'
        },
        "raca": {
          name: 'raca',
          type: 'string'
        },
        "categoria": {
          name: 'categoria',
          type: 'string'
        },
        "sexo": {
          name: 'sexo',
          type: 'boolean'
        },
        "etiqueta": {
          name: 'etiqueta',
          type: 'string'
        },
        "origem": {
          name: 'origem',
          type: 'string'
        },
        "finalidade": {
          name: 'finalidade',
          type: 'string'
        },
        "nascimento": {
          name: 'nascimento',
          type: 'Date'
        },
        "peso": {
          name: 'peso',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "id": {
          name: 'id',
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
      }
    }
  }
}
