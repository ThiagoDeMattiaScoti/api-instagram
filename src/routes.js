const {Router} = require('express')
const routes = new Router()

routes.get('/abc', (request, response) =>{
    response.send({message: 'Conected with sucess!'})
})
