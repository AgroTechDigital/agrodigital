import { Model } from '@mean-expert/model';
/**
 * @module financeiroMovimentacao
 * @description
 * Write a useful financeiroMovimentacao Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    relatorioMovimentacoesFinanceiras: {
      returns: { arg: 'result', type: 'array', root: true },
      accepts: [
        { arg: 'filter', type: 'object', required: false },
        { arg: 'req', type: 'object', 'http': { source: 'req' } }
      ],
      http: { path: '/relatorio-financeiro-movimentacao', verb: 'get', description: 'Relatório de movimentação financeira' }
    },
  }
})

class financeiroMovimentacao {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('financeiroMovimentacao: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }

  // Total movimentações financeiras
  relatorioMovimentacoesFinanceiras(filter: any = {}, req: any, next: Function): void {
    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);

      let where: any = {};
      //if (filter && filter.where) where = filter.where;     

      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where.data = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }

      db.collection('financeiroMovimentacao').aggregate(
        [
          { $match: where },
          {
            $group: {
              _id: "1",
              totalValor: { $sum: "$valor" }
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

module.exports = financeiroMovimentacao;
