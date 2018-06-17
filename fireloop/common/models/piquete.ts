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
    myRemote: {
      returns : { arg: 'result', type: 'array' },
      http    : { path: '/my-remote', verb: 'get' }
    }
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

  /*// Relatório de vendas
  relatorioVendas(filter: any = {}, req: any, next: Function): void {
    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);

      let where: any = {};
      //if (filter && filter.where) where = filter.where;
      where.status = 'ativo';
      where.empresaId = (req.headers.empresa) ? bson.ObjectID(req.headers.empresa) : '';

      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where.data = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }      

      db.collection('venda').aggregate(
        [
          { $match: where },
          {
            $group: {
              _id: "$statusProducao",
              totalPrice: { $sum: "$valorTotal" },
              count: { $sum: 1 }
            }
          },
          { $sort: { count: -1 } }
        ], (erro: any, data: any) => {
          if (erro) {
            next(erro);
          } else {

            data.toArray(function (err: any, res: any) {
              next(null, res);
            });

          }
        }
      )
    });
  }

  // Relatório de vendas
  faturamentoMensal(filter: any = {}, req: any, next: Function): void {
    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);

      let where: any = {};
      //if (filter && filter.where) where = filter.where;
      where.status = 'ativo';
      where.statusProcucao = { $ne: "orcamento" };
      where.empresaId = (req.headers.empresa) ? bson.ObjectID(req.headers.empresa) : '';

      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where.data = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }      

      db.collection('venda').aggregate(
        [
          { $match: where },
          {
            $group: {
              _id: {
                "mes": { $month: "$data" },
                "status": "$statusProducao"
              },
              totalPrice: { $sum: "$valorTotal" }
            }
          },
          { $sort: { valorTotal: -1 } }
        ], (erro: any, data: any) => {
          if (erro) {
            next(erro);
          } else {

            data.toArray(function (err: any, res: any) {
              next(null, res);
            });

          }
        }
      )
    });
  }

  //Relatório de melhores clientes
  melhoresClientes(filter: any, req: any, next: Function): void {
    console.log('melhoresClientes');

    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);
      let where: any = {};
      where.status = 'ativo';
      where.empresaId = (req.headers.empresa) ? bson.ObjectID(req.headers.empresa) : '';

      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where.data = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }

      db.collection('venda').aggregate(
        [
          { $match: where },
          { $match: { statusProducao: "finalizado" } },
          {
            $lookup:
              {
                from: "cliente",
                localField: "clienteId",
                foreignField: "_id",
                as: "clienteInfo"
              }
          },
          {
            $group:
              {
                _id: { nome: "$clienteInfo.nome", foto: "$clienteInfo.foto" },
                valorTotal: { $sum: { $multiply: "$valorTotal" } },
                count: { $sum: 1 }
              }
          },
          { $sort: { valorTotal: -1 } },
          { $limit: 50 }
        ], (erro: any, data: any) => {
          if (erro) {
            next(erro);
          } else {

            data.toArray(function (err: any, res: any) {
              next(null, res);
            });
          }
        }
      )
    });
  }

  //Relatório de melhores produtos
  melhoresProdutos(filter: any = {}, req: any, next: Function): void {

    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);

      let where: any = {};
      where.empresaId = (req.headers.empresa) ? bson.ObjectID(req.headers.empresa) : '';
      
      let where2: any = {}
      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where2["vendaInfo.data"] = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }      
      where2["vendaInfo.statusProducao"] = "finalizado";
      
      db.collection('vendaProduto').aggregate(
        [
          { $match: where },
          {
            $lookup:
              {
                from: "produto",
                localField: "produtoId",
                foreignField: "_id",
                as: "produtoInfo"
              }
          },
          { $unwind: "$produtoInfo" }, 
          {
            $lookup:
              {
                from: "venda",
                localField: "vendaId",
                foreignField: "_id",
                as: "vendaInfo"
              }
          },
          { $match: where2 },
          {
            $group:
              {
                _id: { nome: "$produtoInfo.nome", foto: "$produtoInfo.foto" },
                valorTotal: { $sum: "$valorTotal" },
              }
          },
          { $sort: { valorTotal: -1 } },
          { $limit: 50 }

        ], (erro: any, data: any) => {
          if (erro) {
            next(erro);
          } else {
            data.toArray(function (err: any, res: any) {
              next(null, res);
            });
          }
        }
      )
    });
  }

  //Relatório de melhores serviços
  melhoresServicos(filter: any = {}, req: any, next: Function): void {

    this.model.getDataSource().connector.connect((erro: any, db: any) => {

      if (erro) next(erro);

      let where: any = {};
      where.empresaId = (req.headers.empresa) ? bson.ObjectID(req.headers.empresa) : '';
      
      let where2: any = {}
      let de = (filter && filter.where && filter.where.data && filter.where.data.de) ? filter.where.data.de : null;
      let ate = (filter && filter.where && filter.where.data && filter.where.data.ate) ? filter.where.data.ate : null;
      if (de && ate) where2["vendaInfo.data"] = { $gte: new Date(`${de}`), $lt: new Date(`${ate}`) }      
      where2["vendaInfo.statusProducao"] = "finalizado"; 

      db.collection('vendaServico').aggregate(
        [
          { $match: where },
          {
            $lookup:
              {
                from: "servico",
                localField: "servicoId",
                foreignField: "_id",
                as: "servicoInfo"
              }
          },
          {
            $lookup:
              {
                from: "venda",
                localField: "vendaId",
                foreignField: "_id",
                as: "vendaInfo"
              }
          },
          { $match: where2 },
          {
            $group:
              {
                _id: { nome: "$servicoInfo.nome", foto: "$servicoInfo.foto" },
                valorTotal: { $sum: "$valorTotal" },
              }
          },
          { $sort: { valorTotal: -1 } },
          { $limit: 50 }

        ], (erro: any, data: any) => {
          if (erro) {
            next(erro);
          } else {
            data.toArray(function (err: any, res: any) {
              next(null, res);
            });
          }
        }
      )
    });
  } */
}

module.exports = piquete;
