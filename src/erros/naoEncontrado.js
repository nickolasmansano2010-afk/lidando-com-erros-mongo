import erroBase from "./erroBase.js";

class naoEncontrado extends erroBase {
  constructor(mensagem = "Recurso não encontrado") {
    super(mensagem, 404);
  }
}

export default naoEncontrado;