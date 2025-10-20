import AWS from "aws-sdk";

const dynamo = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
  console.log("Event:", event);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  const tableName = "Students";
  const method = event.httpMethod;

  try {
    if (method === "POST") {
      const body = JSON.parse(event.body);
      await dynamo.put({ TableName: tableName, Item: body }).promise();
      return { statusCode: 200, headers, body: JSON.stringify({ message: "Student added!" }) };
    }

    if (method === "GET") {
      const data = await dynamo.scan({ TableName: tableName }).promise();
      return { statusCode: 200, headers, body: JSON.stringify(data.Items) };
    }

    if (method === "PUT") {
      const body = JSON.parse(event.body);
      await dynamo.update({
        TableName: tableName,
        Key: { studentId: body.studentId },
        UpdateExpression: "set #n = :n, email = :e",
        ExpressionAttributeNames: { "#n": "name" },
        ExpressionAttributeValues: { ":n": body.name, ":e": body.email }
      }).promise();
      return { statusCode: 200, headers, body: JSON.stringify({ message: "Student updated!" }) };
    }

    if (method === "DELETE") {
      const body = JSON.parse(event.body);
      await dynamo.delete({ TableName: tableName, Key: { studentId: body.studentId } }).promise();
      return { statusCode: 200, headers, body: JSON.stringify({ message: "Student deleted!" }) };
    }

    return { statusCode: 400, headers, body: JSON.stringify({ message: "Unsupported method" }) };

  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
