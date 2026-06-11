class erroBase extends Error {
constructor(mensagem = 'erro interno do servidor', statusCode = 500) {
    super();
    this.message = mensagem;
    this.statusCode = statusCode;
  }

  enviarResposta(res) {
    res.status(this.statusCode).send({ 
        message: this.message,
        status: this.statusCode
    });
}}

export default erroBase;