const express = require('express')
const app = express()
app.get('/',(req,res)=>
{
    res.json([{name:'Parth'},{name:'Random'}])
})
app.listen(8000, () => {
  console.log('server is listening on port 8000....')
})