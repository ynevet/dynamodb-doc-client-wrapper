# amazon-dynamodb-doc-client-wrapper

## Description

A wrapper class around AWS DynamoDB document client that allows to easily initialize an AWS DynamoDB or AWS DAX client

## Installation:
```shell
npm install amazon-dynamodb-doc-client-wrapper
```

## Usage example:

```typescript
import { DocumentClientWrapper, ClientType } from "../infra/dynamo-document-client-wrapper";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

// Initialized as DAX docuemnt client:
console.log("Going to initialize a DAX document client");
clientWrapper = new DocumentClientWrapper(ClientType.DynamoDBDax, [appConfig.dynamoDaxEndpoint()], appConfig.dynamoRegion(), appConfig.dynamoTimeout());


// Initialized as DAX docuemnt client:
console.log("Going to initialize a dynamaoDB document client");
clientWrapper = new DocumentClientWrapper(ClientType.DynamoDB, [appConfig.dynamoEndpoint()], appConfig.dynamoRegion(), appConfig.dynamoTimeout());
```
