const fs = require("fs");
const path = require("path");

const env = process.env.REACT_APP_ENV || "development"; // Padrão: development
const envFile = path.resolve(__dirname, `.env.${env}`);

if (fs.existsSync(envFile)) {
  fs.copyFileSync(envFile, path.resolve(__dirname, ".env"));
  console.log(`✔️  Usando configuração do ambiente: ${env}`);
} else {
  console.error(`❌  Arquivo .env.${env} não encontrado!`);
  process.exit(1);
}
