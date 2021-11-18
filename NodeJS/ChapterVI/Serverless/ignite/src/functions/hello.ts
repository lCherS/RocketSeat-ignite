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