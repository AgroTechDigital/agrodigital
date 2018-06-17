import { Model } from '@mean-expert/model';
/**
 * @module animalRFID
 * @description
 * Write a useful animalRFID Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'access', type: 'operation' }
  },
  remotes: {
    leitura: {
      returns: { arg: 'result', type: 'array', root: true },
      http: { path: '/leitura', verb: 'get' }
    }
  }
})

class animalRFID {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('animalRFID: afetr teste');
    next();
  }
  // Example Remote Method
  leitura(next: Function): void {
    this.model.find((err: any, data: any[]) => {
      this.model.destroyAll({}, (err: any, data2: any[]) => {
        next(null, data)
      })
    });
  }
}

module.exports = animalRFID;
