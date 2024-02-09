import express from 'express'
import Usuario from '../models/usuario'
import usuarioRepository from '../repositories/usuario-repository'
import { StatusCodes } from 'http-status-codes'


const usuarioRouter = express.Router()

usuarioRouter.post('/usuario', (req, res) => {
	const Usuario: Usuario = req.body
	usuarioRepository.criar(Usuario, (id: number) => {
        if (id) {
            res.status(StatusCodes.CREATED).json(+id);
        } else {
            res.status(StatusCodes.BAD_REQUEST).send()
        }
    })
})

usuarioRouter.get('/usuario', (req, res) => {
	usuarioRepository.lerTodos((usuarios) => res.status(StatusCodes.OK).json(usuarios))
})

usuarioRouter.get('/usuario/:id', (req, res) => {
	const id: number = +req.params.id
	usuarioRepository.ler(id, (Usuario) => {
		if (Usuario) {
			res.status(StatusCodes.OK).json(Usuario)
		} else {
			res.status(StatusCodes.BAD_REQUEST).send()
		}
	})
})

usuarioRouter.put('/usuario/:id', (req, res) => {
	const id: number = +req.params.id
	usuarioRepository.atualizar(id, req.body, (notFound) => {
		if (notFound) {
			res.status(StatusCodes.NOT_FOUND).send()
		} else {
			res.status(StatusCodes.OK).send()
		}
	})
})

usuarioRouter.delete('/usuario/:id', (req, res) => {
	const id: number = +req.params.id
	usuarioRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(StatusCodes.NOT_FOUND).send()
        } else {
            res.status(StatusCodes.OK).send()
        }
    })
})

export default usuarioRouter