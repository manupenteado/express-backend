import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

//converte o que a gente recebe no servidor para um obj javascript
app.use(express.json());

app.get('/', (req, res) => {
    res.send({message: 'Hello everyone!'});
    });

//se a variavel nao for definida, ele vai usar o 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is running on port http://localhost:${PORT}/`);});