import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddb } from '../config/creds.js';
import { randomUUID } from 'crypto';

interface CreateCustomerProps {
  name: string;
  email: string;
}

class createCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error('Preencha todos os campos');
    }

    const command = new PutItemCommand({
      TableName: 'Clientes',
      Item: {
        id: { S: randomUUID() },
        name: { S: name },
        email: { S: email },
        active: { BOOL: true },
        created_at: { S: new Date().toISOString() },
        updated_at: { S: new Date().toISOString() }
      },
    });

    const result = await ddb.send(command);

    return result;
  }
}

export { createCustomerService };