import dotenv from 'dotenv'
dotenv.config({ override: true })
import express, {Request, Response, NextFunction} from 'express'
import "express-async-errors" //precisa estar logo abaixo do express.
//essa lib é quem lida com tratamento de erros assincronos, o que faz com que o middleware de erro possa funcionar
import cors from 'cors'
import { router } from './routes'
import { AppError } from '@shared/errors/appError'
import { appDataSource } from '@config/typeorm'

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			message: error.message,
			status: 'error'
		})
	}

	return response.status(500).json({
		message: 'Internal server Error',
		status: 'error'
	})
})

appDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
				app.listen(3000, () => console.log(`app process ${process.pid} running on port ${process.env.PORT}`))
    })
    .catch((error) => console.log(error))


