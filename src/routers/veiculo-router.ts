import express from 'express'

import itensRepository from '../repositories/veiculo-repository'
import Veiculo from '../models/veiculo'
import { StatusCodes } from 'http-status-codes'

const veiculoRouter = express.Router()

veiculoRouter.post('/veiculo', (req, res) => {
	const veiculo: Veiculo = req.body
	itensRepository.criar(veiculo, (id) => {
        if (id) {
            res.status(StatusCodes.CREATED).json(+id);
        } else {
            res.status(StatusCodes.BAD_REQUEST).send()
        }
    })
})

veiculoRouter.get('/veiculo', (req, res) => {
	itensRepository.lerTodos((veiculos) => res.status(StatusCodes.OK).json(veiculos))
})

veiculoRouter.get('/veiculo/:id', (req, res) => {
	const id: number = +req.params.id
	itensRepository.ler(id, (Veiculo) => {
		if (Veiculo) {
			res.status(StatusCodes.OK).json(Veiculo)
		} else {
			res.status(StatusCodes.BAD_REQUEST).send()
		}
	})
})

veiculoRouter.put('/veiculo/:id', (req, res) => {
	const id: number = +req.params.id
	itensRepository.atualizar(id, req.body, (notFound) => {
		if (notFound) {
			res.status(StatusCodes.NOT_FOUND).send()
		} else {
			res.status(StatusCodes.OK).send()
		}
	})
})

veiculoRouter.delete('/veiculo/:id', (req, res) => {
	const id: number = +req.params.id
	itensRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(StatusCodes.NOT_FOUND).send()
        } else {
            res.status(StatusCodes.OK).send()
        }
    })
})

export default veiculoRouter