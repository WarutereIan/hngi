const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({"slackUsername": "Warutere",
"backend": true,
"age":24,
"bio":"I am an aspiring backend and blockchain developer with expertise in building MVC based servers"})
})

app.post('/', (req,res)=>{
  const payload = req.body
  console.log(payload)
  const operation= payload.operation_type
  const x = payload.x
  const y = payload.y
  
  
  if(operation == 'addition'){
    const result = x + y
    console.log(result)
    res.send(
    {
      "slackUsername": "Warutere",
      "result": result,
      "operation_type": operation
    })
  }
  else if(operation == 'subtraction' ){
    const result = x - y
    console.log(result)
     res.send(
    {
      "slackUsername": "Warutere",
      "result": result,
      "operation_type": operation
    })
  }
  else if(operation == 'multiplication'){
    const result = x * y
    console.log(result)
     res.json(
    {
      "slackUsername": "Warutere",
      "result": result,
      "operation_type": operation
    })
  }
  else{
    return res.json(
    {
      "slackUsername": "Warutere",
      "result": "result",
      "operation_type": "operation"
    })
  }
})

app.listen(5000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log('server running')

})
