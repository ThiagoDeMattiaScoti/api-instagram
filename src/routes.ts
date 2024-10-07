import {Router, Request, Response} from 'express'
const routes = Router()

routes.get('/abc', (request: Request, response: Response) =>{
    response.send({message: 'Conected with sucess!'})
})

export default routes