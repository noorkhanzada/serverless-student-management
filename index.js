exports.handler = async (event) => {
  console.log("Lambda auto-deployed successfully!");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  const method = event.httpMethod;
  let response;

  switch (method) {
    case "GET":
      response = {
        statusCode: 200,
        headers,
        body: JSON.stringify([{ studentid: "1", name: "Aina Noor", email: "aina@example.com" }])
      };
      break;

    case "POST":
      response = {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: "Student added successfully!" })
      };
      break;

    case "PUT":
      response = {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: "Student updated successfully!" })
      };
      break;

    case "DELETE":
      response = {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: "Student deleted successfully!" })
      };
      break;

    default:
      response = {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: "Unsupported HTTP method" })
      };
  }

  return response;
};
