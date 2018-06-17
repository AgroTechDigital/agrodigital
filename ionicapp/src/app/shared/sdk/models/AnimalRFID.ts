/* tslint:disable */

declare var Object: any;
export interface AnimalRFIDInterface {
  "etiqueta"?: string;
  "peso"?: number;
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class AnimalRFID implements AnimalRFIDInterface {
  "etiqueta": string;
  "peso": number;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: AnimalRFIDInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnimalRFID`.
   */
  public static getModelName() {
    return "AnimalRFID";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnimalRFID for dynamic purposes.
  **/
  public static factory(data: AnimalRFIDInterface): AnimalRFID{
    return new AnimalRFID(data);
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
      name: 'AnimalRFID',
      plural: 'AnimalRFIDs',
      path: 'AnimalRFIDs',
      idName: 'id',
      properties: {
        "etiqueta": {
          name: 'etiqueta',
          type: 'string'
        },
        "peso": {
          name: 'peso',
          type: 'number'
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
