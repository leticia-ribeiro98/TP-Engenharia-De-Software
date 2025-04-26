const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://leticiaribeirom:<BoloDeAbacaxi>@cadastro.whoxyv2.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado!');
  } catch (error) {
    console.error('Erro ao conectar MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
