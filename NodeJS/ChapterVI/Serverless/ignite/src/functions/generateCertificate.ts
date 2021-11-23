import { document } from '../utils/dynamodbClient';

interface ICreateCertificate{
  id: string;
  name: string;
  grade: string;
}

export const handle = async (event) => {

  const { id, name, grade } = JSON.parse(event.body) as ICreateCertificate;

  await document.put({
    TableName: "users_certificates",
    Item: {
      id,
      name, 
      grade
    }
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Certificate created successfully"
    })
  }
}

//ID: AKIAVFWZPUOZ7VVKH6SK
//CHAVE: 1qzuU1zrAlhAyNQSmQZnxwhDdSH1Vp8uyknE09jH