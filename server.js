const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({"slackUsername": "Warutere",
"backend": true,
"age":24,
"bio":"I am an aspiring backend and blockchain developer with expertise in building MVC based servers"})
})

app.listen(5000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log('server running')

})