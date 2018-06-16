/* tslint:disable */
import {
  FinanceiroMovimentacao
} from '../index';

declare var Object: any;
export interface FinanceiroCategoriaInterface {
  "descricao": string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  movimentacao?: FinanceiroMovimentacao[];
}

export class FinanceiroCategoria implements FinanceiroCategoriaInterface {
  "descricao": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  movimentacao: FinanceiroMovimentacao[];
  constructor(data?: FinanceiroCategoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FinanceiroCategoria`.
   */
  public static getModelName() {
    return "FinanceiroCategoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FinanceiroCategoria for dynamic purposes.
  **/
  public static factory(data: FinanceiroCategoriaInterface): FinanceiroCategoria{
    return new FinanceiroCategoria(data);
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
      name: 'FinanceiroCategoria',
      plural: 'FinanceiroCategoria',
      path: 'FinanceiroCategoria',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
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
        movimentacao: {
          name: 'movimentacao',
          type: 'FinanceiroMovimentacao[]',
          model: 'FinanceiroMovimentacao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'financeiroCategoriaId'
        },
      }
    }
  }
}
