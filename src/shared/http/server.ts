import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import { router } from './routes'
import { AppError } from '@shared/errors/appError'
import { appDataSource } from '@config/typeorm'
import "express-async-errors"

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			message: error.message,
			status: error.statusCode
		})
	}

	return response.status(500).json({
		message: 'Internal server Error',
		status: 500
	})
})

appDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
				app.listen(3000, () => console.log(`app process ${process.pid} running on port 3000`))
    })
    .catch((error) => console.log(error))


