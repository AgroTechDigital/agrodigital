import { Model } from '@mean-expert/model';
/**
 * @module piqueteEventos
 * @description
 * Write a useful piqueteEventos Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    myRemote: {
      returns : { arg: 'result', type: 'array' },
      http    : { path: '/my-remote', verb: 'get' }
    }
  }
})

class piqueteEventos {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {}

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('piqueteEventos: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }
}

module.exports = piqueteEventos;
