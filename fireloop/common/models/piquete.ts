import { Model } from '@mean-expert/model';
/**
 * @module piquete
 * @description
 * Write a useful piquete Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    relatorioGeral: {
      returns: { arg: 'result', type: 'array', root: true },
      accepts: [
        { arg: 'filter', type: 'object', required: false },
        { arg: 'req', type: 'object', 'http': { source: 'req' } }
      ],
      http: { path: '/relatorio-geral', verb: 'get', description: 'Relatório de geral piqutes' }
    },
  }
})

class piquete {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {}

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('piquete: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }

  // Total movimentações financeiras
  relatorioGeral(filter: any = {}, req: any, next: Function): void {
    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);

      let where: any = {};
      //if (filter && filter.where) where = filter.where;     

      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where.data = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }

      db.collection('piquete').aggregate(
        [
          { $match: where },
          {
            $group: {
              _id : "piquete",
              totalCabecas: { $sum: "$cabecas" },  
              totalUA: { $sum: "$UA" },
              piquetes: { $sum: 1 }
            }             
          }
        ], (erro: any, data: any) => {
          if (erro) {
            next(erro);
          } else {
            console.log(data);
            next(null, data[0]);
            // data.toArray(function (err: any, res: any) {
            //   next(null, res);
            // });
          }
        }
      )
    });
  }
}

module.exports = piquete;
