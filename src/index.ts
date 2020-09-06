import AWS from 'aws-sdk';
import AmazonDaxClient from 'amazon-dax-client';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

export class DocumentClientWrapper {
  endpoints: (string | undefined)[];
  region: string;
  clientType: ClientType;
  timeout: number;

  constructor(clientType: ClientType, endpoints: (string | undefined)[], region: string, timeout: number) {
    if (!endpoints || endpoints.length === 0) {
      throw new Error("endpoints can't be null or empty");
    }

    if (!region) {
      throw new Error("region can't be null");
    }

    this.endpoints = endpoints;
    this.region = region;
    this.clientType = clientType;
    this.timeout = timeout;
  }

  getClient(): DocumentClient {
    let service: AWS.DynamoDB | undefined;

    switch (this.clientType) {
      case ClientType.DynamoDB: {
        const [endpoint] = this.endpoints;
        service = new AWS.DynamoDB({
          region: this.region,
          endpoint,
          httpOptions: {
            timeout: this.timeout,
          },
          maxRetries: 3,
        });
        break;
      }
      case ClientType.DynamoDBDax: {
        service = new AmazonDaxClient({ endpoints: this.endpoints, region: this.region });
        break;
      }
    }

    return new AWS.DynamoDB.DocumentClient({
      service,
      region: this.region,
    });
  }
}

export enum ClientType {
  DynamoDB,
  DynamoDBDax,
}
