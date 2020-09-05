# aws-dynamodb-doc-client-wrapper

## Description

A wrapper class around AWS DynamoDB document client that allows initializing & swapping between AWS DynamoDB to AWS DAX client easily

## Motivation
Easily initialization in case when only one of the clients are available for use 

## Installation:
```shell
# using npm
npm install aws-dynamodb-doc-client-wrapper -s
# using yarn
yarn add aws-dynamodb-doc-client-wrapper
```

## Usage example:

```typescript
import { DocumentClientWrapper, ClientType } from "aws-dynamodb-doc-client-wrapper";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

// Initialized as DAX docuemnt client:
clientWrapper = new DocumentClientWrapper(ClientType.DynamoDBDax, ['ENDPOINT'], '[REGION]', '[TIMEOUT]');


// Initialized as DynamoDB docuemnt client:
clientWrapper = new DocumentClientWrapper(ClientType.DynamoDB, ['ENDPOINT'], '[REGION]', '[TIMEOUT]');
```
