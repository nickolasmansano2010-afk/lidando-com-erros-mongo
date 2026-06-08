import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find().populate("autor");
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findById(id).populate("autor", "nome");

      if (!livroResultado) {
        return res.status(404).json({ message: "Livro não localizado." });
      }

      res.status(200).json(livroResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const livroResultado = await livros.create(req.body);
      res.status(201).json(livroResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroAtualizado = await livros.findByIdAndUpdate(id, req.body, { new: true });

      if (!livroAtualizado) {
        return res.status(404).json({ message: "Livro não localizado." });
      }

      res.status(200).json({ message: "Livro atualizado com sucesso", livro: livroAtualizado });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroRemovido = await livros.findByIdAndDelete(id);

      if (!livroRemovido) {
        return res.status(404).json({ message: "Livro não localizado." });
      }

      res.status(200).json({ message: "Livro removido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      if (!editora) {
        return res.status(400).json({ message: "Editora é obrigatória." });
      }

      const livrosResultado = await livros.find({ editora });
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };



}

export default LivroController;