/* tslint:disable */

declare var Object: any;
export interface ModuloInterface {
  "descricao": string;
  "quantidade": number;
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Modulo implements ModuloInterface {
  "descricao": string;
  "quantidade": number;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ModuloInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Modulo`.
   */
  public static getModelName() {
    return "Modulo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Modulo for dynamic purposes.
  **/
  public static factory(data: ModuloInterface): Modulo{
    return new Modulo(data);
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
      name: 'Modulo',
      plural: 'modelos',
      path: 'modelos',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "quantidade": {
          name: 'quantidade',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'number'
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
