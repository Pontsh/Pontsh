console .log('hello')
const express = require ('express')
const bodyParser = require ('body-Parser')
const cors = require ('cors')
const morgan = require ('morgan')

const app = express ()
app.use(morgan('combined'))
app.use (bodyParser.json())
app.use(cors())

app.get('/register',(reg,res) =>{
    res.send({
 message:'Hello {reg.body.email}Your user was registered Have fun'
    })
})

app.listen (process.env.PORT||8081)