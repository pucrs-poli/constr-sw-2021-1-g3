import express, { Request, Response } from 'express'

const app = express()

app.get('/', (res: Response, req: Request) => {
    res.status(200).send({
        health: 'up'
    })
})

app.listen(8080, () => {
    console.log('User service listening on port 8080')
})