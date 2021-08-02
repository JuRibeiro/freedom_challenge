const cors = require ('cors')
const express = require ('express')
const app = express()
const axios = require ('axios')

app.use(cors())

app.get('/', async(req,resp) =>
{
  //response: resposta do axios, data: response
  const {data} = await axios ('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
  console.log(data)

  return resp.json(data)

    /* return resp.json([
        {
        "id": 0,
            "sku": 8552515751438644,
            "title": "Camisa Nike Corinthians I",
            "description": "14/15 s/nº",
            "availableSizes": {
              "S": 100, 
              "G": 5, 
              "GG": 120, 
              "GGG": 12
        },
            "style": "Branco com listras pretas",
            "price": 229.9,
            "installments": 9,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": true,
            "image": "https://via.placeholder.com/300x300"
          },
      
          {
            "id": 1,
            "sku": 18644119330491312,
            "title": "Camisa Nike Corinthians II",
            "description": "14/15 s/nº",
            "availableSizes": {
              "S": 100, 
              "G": 5, 
              "GG": 120, 
              "GGG": 12
            },
            "style": "Preta com listras brancas",
            "price": 229.9,
            "installments": 9,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": true,
            "image": "https://via.placeholder.com/300x300"
          },
      
      
          {
            "id": 3,
            "sku": 876661122392077,
            "title": "Camisa Feminina Nike Corinthians II",
            "description": "2014 s/nº",
            "availableSizes": {
              "S": 1, 
              "G": 6
            },
            "style": "Preto com listras brancas",
            "price": 199.9,
            "installments": 7,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": true,
            "image": "https://via.placeholder.com/300x300"
          },
      
          {
            "id": 4,
            "sku": 9197907543445677,
            "title": "Camisa Nike Corinthians I",
            "description": "14/15 s/nº - Jogador",
            "availableSizes": {
              "GG": 10
            },
            "style": "Branco com listras pretas",
            "price": 349.9,
            "installments": 12,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": false,
            "image": "https://via.placeholder.com/300x300"
          },
      
          {
            "id": 5,
            "sku": 10547961582846888,
            "title": "Kit Corinthians - Camisa Nike II",
            "description": "14/15 + Camiseta 1º Mundial",
            "availableSizes": {
              "S": 12, 
              "G": 3, 
              "GG": 1
            },
            "style": "Preto",
            "price": 229.9,
            "installments": 9,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": false,
            "image": "https://via.placeholder.com/300x300"
          },
      
          {
            "id": 7,
            "sku": 18532669286405342,
            "title": "Camisa Corinthians Réplica",
            "description": "1977 Infantil",
            "availableSizes": {
              "S": 1
            },
            "style": "Preto com listras brancas",
            "price": 109.9,
            "installments": 4,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": true,
            "image": "https://via.placeholder.com/300x300"
          },
      
          {
            "id": 8,
            "sku": 5619496040738316,
            "title": "Calção Nike Strike Lgr Woven",
            "description": "",
            "availableSizes": {
              "GG": 10
            },
            "style": "Azul escuro",
            "price": 119.9,
            "installments": 4,
            "currencyId": "BRL",
            "currencyFormat": "R$",
            "isFreeShipping": false,
            "image": "https://via.placeholder.com/300x300"
          },
    ]) */
})

app.listen('8081')