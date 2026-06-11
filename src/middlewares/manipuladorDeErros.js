import mongoose from "mongoose";
import erroBase from "../erros/erroBase.js";
import requisicaoIncorreta from "../erros/requisicaoIncorreta.js";
import erroValidacao from "../erros/erroValidacao.js";
import naoEncontrado from "../erros/naoEncontrado.js";

function manipuladorDeErros(erro, req, res, next) {
  console.log(erro);

  if (erro instanceof mongoose.Error.CastError) {
    new requisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new erroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof naoEncontrado) {
    erro.enviarResposta(res);
  } else if (erro instanceof erroBase) {
    erro.enviarResposta(res);
  } else {
    new erroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;