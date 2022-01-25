const express = require('express')
const app = express()
const logger = require('./logger')
//req => middleware => res
app.get('/',(req,res)=>
{
    res.send('Home')
})
app.use(logger)
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>
{
    res.send('Products')
})
app.listen(8000, () => {
  console.log('Server is listening on port 8000....')
})