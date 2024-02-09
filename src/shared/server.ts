import cors from 'cors';
import express from 'express';
import usuarioRouter from '../routers/usuario-router';
import companhiaRouter from '../routers/companhia-router';
import veiculoRouter from '../routers/veiculo-router';
import usuarioRepository from '../repositories/usuario-repository';
import { StatusCodes } from 'http-status-codes';

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
	res.send('Bem-vindo ao teste Greenv de Luis Alberto Pereira!')
})

server.use(cors({
	origin: '*'
}))

//interceptando todas as chamadas de endpoints
//para validacao de token credenciado
server.use((req, res, next) => {
	let token: any = req.headers['authorization'];
	usuarioRepository.validaToken(token, (result) => {
		if (result) {
			next();
		} else {
			res.status(StatusCodes.UNAUTHORIZED);
		}
	});
});

// Rotas
server.use('/api', usuarioRouter);
server.use('/api', companhiaRouter);
server.use('/api', veiculoRouter);

// Resposta padrao para quaisquer outras requisições:
server.use((req, res) => {
	res.status(404)
})

export {server};