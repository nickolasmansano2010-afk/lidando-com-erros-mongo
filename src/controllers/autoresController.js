import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = async(req, res) => {
    try {
      const autoresResultado = await autores.find();

      res.status(200).json(autoresResultado);
      
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);

      if (!autorResultado) {
        return res.status(404).json({ message: "Autor não localizado." });
      }

      res.status(200).json(autorResultado);
    } catch (erro) {
      console.error(erro);
      res.status(400).json({ message: "Id inválido." });
    }
  };
  
  
  static cadastrarAutor = async (req, res) => {
    try {
      const autorResultado = await autores.create(req.body);
      res.status(201).json(autorResultado);
    } catch (erro) {
      if (erro.name === "ValidationError") {
        return res.status(400).json({ message: `Erro de validação: ${erro.message}` });
      }
      console.error(erro);
      res.status(500).json({ message: "Erro ao cadastrar Autor." });
    }
  };
  

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
  
      await autores.findByIdAndUpdate(id, {$set: req.body});
  
      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  };
  
  static excluirAutor = async (req, res) => {
    try {
      const id = req.params.id;
  
      await autores.findByIdAndDelete(id);
  
      res.status(200).send({message: "Autor removido com sucesso"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  };
  

}

export default AutorController;