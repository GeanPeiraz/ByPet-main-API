/* const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send ("Testando API - ByPET 29-04-2023")
}  

       )

app.listen(3000, ()=>{ 
    console.log('Servidor em - http://localhost:3000'); 
});

*/


const { response } = require ('express');
const http = require ('http');

http 
 . createServer((req, res) =>{
    response.whiteHead(200, { "Content-Type": "aplication/json"});

    if(request.url === 'usuario') {
        response.end(
           JSON.stringify ({
            message:"Rota de cadastro",

           })

        );

 


    response.end("Testando API NODEJS")


        }}

 )



.listen(3000, () => console.log ("Servidor teste está rodando em webmobile p:3000"));
