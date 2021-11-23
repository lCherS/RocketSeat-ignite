export const handle = async (event) => {
console.log('acessou')
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'hello world'
    }),
    headers: {
      "content-type": "application/json"
    }
  }
}

//ID: AKIAVFWZPUOZ7VVKH6SK
//CHAVE: 1qzuU1zrAlhAyNQSmQZnxwhDdSH1Vp8uyknE09jH