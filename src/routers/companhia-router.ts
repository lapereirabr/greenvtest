import express from 'express'
import Companhia from '../models/companhia'
import companhiaRepository from '../repositories/companhia-repository'
import { StatusCodes } from 'http-status-codes'

const companhiaRouter = express.Router()

companhiaRouter.post('/companhia', (req, res) => {
	const Companhia: Companhia = req.body
	companhiaRepository.criar(Companhia, (id) => {
        if (id) {
            res.status(StatusCodes.CREATED).json(+id);
        } else {
            res.status(StatusCodes.BAD_REQUEST).send()
        }
    })
})

companhiaRouter.get('/companhia', (req, res) => {
	companhiaRepository.lerTodos((companhias) => res.status(StatusCodes.OK).json(companhias))
})

companhiaRouter.get('/companhia/:id', (req, res) => {
	const id: number = +req.params.id
	companhiaRepository.ler(id, (Companhia) => {
		if (Companhia) {
			res.status(StatusCodes.OK).json(Companhia)
		} else {
			res.status(StatusCodes.BAD_REQUEST).send()
		}
	})
})

companhiaRouter.put('/companhia/:id', (req, res) => {
	const id: number = +req.params.id
	companhiaRepository.atualizar(id, req.body, (notFound) => {
		if (notFound) {
			res.status(StatusCodes.NOT_FOUND).send()
		} else {
			res.status(StatusCodes.OK).send()
		}
	})
})

companhiaRouter.delete('/companhia/:id', (req, res) => {
	const id: number = +req.params.id
	companhiaRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(StatusCodes.NOT_FOUND).send()
        } else {
            res.status(StatusCodes.OK).send()
        }
    })
})

export default companhiaRouter