/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Modulo } from '../../models/Modulo';
import { Piquete } from '../../models/Piquete';
import { PiqueteEventos } from '../../models/PiqueteEventos';
import { Manejo } from '../../models/Manejo';
import { Animal } from '../../models/Animal';
import { AnimalEventos } from '../../models/AnimalEventos';
import { FinanceiroCategoria } from '../../models/FinanceiroCategoria';
import { FinanceiroMovimentacao } from '../../models/FinanceiroMovimentacao';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Modulo: Modulo,
    Piquete: Piquete,
    PiqueteEventos: PiqueteEventos,
    Manejo: Manejo,
    Animal: Animal,
    AnimalEventos: AnimalEventos,
    FinanceiroCategoria: FinanceiroCategoria,
    FinanceiroMovimentacao: FinanceiroMovimentacao,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
