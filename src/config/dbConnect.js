import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI não está definida no .env");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ Conectado ao MongoDB com sucesso");
  } catch (erro) {
    console.error("❌ Erro ao conectar ao MongoDB:", erro.message);
    process.exit(1);
  }
};

connectDb();

let db = mongoose.connection;

export default db;