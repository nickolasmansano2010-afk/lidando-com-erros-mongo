import erroBase from "../erros/erroBase.js";

class requisicaoIncorreta extends erroBase {
constructor(mensagem = "um ou mais dados fornecedos estao incorretos") {
    super(mensagem, 400);
}
}

export default requisicaoIncorreta;