/* tslint:disable */
import {
  FinanceiroCategoria
} from '../index';

declare var Object: any;
export interface FinanceiroMovimentacaoInterface {
  "descricao"?: string;
  "valor"?: number;
  "dataMovimentacao"?: Date;
  "debito"?: boolean;
  "custoFixo"?: boolean;
  "recorente"?: boolean;
  "tags"?: Array<any>;
  "id"?: any;
  "categoriaId"?: any;
  "financeiroCategoriaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  categoria?: FinanceiroCategoria;
}

export class FinanceiroMovimentacao implements FinanceiroMovimentacaoInterface {
  "descricao": string;
  "valor": number;
  "dataMovimentacao": Date;
  "debito": boolean;
  "custoFixo": boolean;
  "recorente": boolean;
  "tags": Array<any>;
  "id": any;
  "categoriaId": any;
  "financeiroCategoriaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  categoria: FinanceiroCategoria;
  constructor(data?: FinanceiroMovimentacaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FinanceiroMovimentacao`.
   */
  public static getModelName() {
    return "FinanceiroMovimentacao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FinanceiroMovimentacao for dynamic purposes.
  **/
  public static factory(data: FinanceiroMovimentacaoInterface): FinanceiroMovimentacao{
    return new FinanceiroMovimentacao(data);
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
      name: 'FinanceiroMovimentacao',
      plural: 'FinanceiroMovimentacaos',
      path: 'FinanceiroMovimentacaos',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "dataMovimentacao": {
          name: 'dataMovimentacao',
          type: 'Date'
        },
        "debito": {
          name: 'debito',
          type: 'boolean'
        },
        "custoFixo": {
          name: 'custoFixo',
          type: 'boolean'
        },
        "recorente": {
          name: 'recorente',
          type: 'boolean'
        },
        "tags": {
          name: 'tags',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "categoriaId": {
          name: 'categoriaId',
          type: 'any'
        },
        "financeiroCategoriaId": {
          name: 'financeiroCategoriaId',
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
        categoria: {
          name: 'categoria',
          type: 'FinanceiroCategoria',
          model: 'FinanceiroCategoria',
          relationType: 'belongsTo',
                  keyFrom: 'categoriaId',
          keyTo: 'id'
        },
      }
    }
  }
}
