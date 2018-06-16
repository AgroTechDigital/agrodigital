/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Modulo } from '../../models/Modulo';
import { Piquete } from '../../models/Piquete';
import { PiqueteEventos } from '../../models/PiqueteEventos';
import { Manejo } from '../../models/Manejo';
import { Animal } from '../../models/Animal';

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
