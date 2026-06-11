import requisicaoIncorreta from "./requisicaoIncorreta.js";

class erroValidacao extends requisicaoIncorreta {
constructor(erro) {
    const mensagensDeErro = Object.values(erro.errors)
.map((error) => error.message)
.join('; ');

    super('os seguintes erros foram encontrados: ' + mensagensDeErro)
}
}

export default erroValidacao;