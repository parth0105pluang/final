const express = require('express')
const app = express()
//app.get
//app.post
//app.put
app.get('/',(req,res)=>
{
 res.send('Home Page')
})
app.get('/about',(req,res)=>
{
 res.send('About Page')
})
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})
app.listen(8000,()=>
{
  console.log('server on port 8000')
})