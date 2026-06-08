import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next) {
 console.log(erro);

  if (erro instanceof mongoose.Error.CastError) {
    return res.status(400).send({ error: 'um ou mais dados fornecedos estao incorretos' });
  } else if (erro instanceof mongoose.Error.ValidationError) {
console.log(erro.errors);

    return res.status(400).send({ error: 'houve erros de validação de dados' });
  } else {
    res.status(500).send({ error: 'Erro interno do servidor' });
  }
}

export default manipuladorDeErros;