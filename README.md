Building a Serverless Student Management System using AWS Lambda, API Gateway, and DynamoDB
In this project, I built a Serverless Student Management System using:

AWS Lambda (for backend logic)

API Gateway (for REST API endpoints)

Amazon DynamoDB (for database)

Amazon S3 & CloudFront (for frontend hosting)

AWS CodePipeline (for CI/CD automation)
Architecture Overview
Frontend → API Gateway → AWS Lambda → DynamoDB
                            ↑
                      S3 + CloudFront
User interacts with the UI hosted on S3.
 API Gateway routes requests to Lambda functions.
 Lambda reads/writes data in DynamoDB.
 CloudFront accelerates global delivery of the frontend.  
 Technologies Used:

AWS Lambda

API Gateway

DynamoDB

S3 + CloudFront

CodePipeline
You can read my detailed blog  


                      

                      
