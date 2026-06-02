import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find().populate("autor");
      res.status(200).json(livrosResultado);
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ message: "Erro ao listar livros." });
    }
  };

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findById(id).populate("autor", "nome");

      if (!livroResultado) {
        return res.status(404).json({ message: "Livro não localizado." });
      }

      res.status(200).json(livroResultado);
    } catch (erro) {
      console.error(erro);
      res.status(400).json({ message: "Id inválido." });
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      const livroResultado = await livros.create(req.body);
      res.status(201).json(livroResultado);
    } catch (erro) {
      if (erro.name === "ValidationError") {
        return res.status(400).json({ message: `Erro de validação: ${erro.message}` });
      }
      console.error(erro);
      res.status(500).json({ message: "Erro ao cadastrar livro." });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      const livroAtualizado = await livros.findByIdAndUpdate(id, req.body, { new: true });

      if (!livroAtualizado) {
        return res.status(404).json({ message: "Livro não localizado." });
      }

      res.status(200).json({ message: "Livro atualizado com sucesso", livro: livroAtualizado });
    } catch (erro) {
      console.error(erro);
      res.status(400).json({ message: "Id inválido." });
    }
  };

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id;
      const livroRemovido = await livros.findByIdAndDelete(id);

      if (!livroRemovido) {
        return res.status(404).json({ message: "Livro não localizado." });
      }

      res.status(200).json({ message: "Livro removido com sucesso" });
    } catch (erro) {
      console.error(erro);
      res.status(400).json({ message: "Id inválido." });
    }
  };

  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;

      if (!editora) {
        return res.status(400).json({ message: "Editora é obrigatória." });
      }

      const livrosResultado = await livros.find({ editora });
      res.status(200).json(livrosResultado);
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ message: "Erro ao listar livros." });
    }
  };



}

export default LivroController;