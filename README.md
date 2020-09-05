# aws-dynamodb-doc-client-wrapper

## Description

A wrapper class around AWS DynamoDB document client that allows initializing an AWS DynamoDB or AWS DAX client easily

## Installation:
```shell
# using npm
npm install npm i aws-dynamodb-doc-client-wrapper
# using yarn
yarn add aws-dynamodb-doc-client-wrapper
```

## Usage example:

```typescript
import { DocumentClientWrapper, ClientType } from "../infra/dynamo-document-client-wrapper";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

// Initialized as DAX docuemnt client:
clientWrapper = new DocumentClientWrapper(ClientType.DynamoDBDax, ['ENDPOINT'], '[REGION]', '[TIMEOUT]');


// Initialized as DAX docuemnt client:
clientWrapper = new DocumentClientWrapper(ClientType.DynamoDB, ['ENDPOINT'], '[REGION]', '[TIMEOUT]');
```
