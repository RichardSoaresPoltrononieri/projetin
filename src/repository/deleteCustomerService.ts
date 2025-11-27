import { Customer } from '../models/customer.js';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DeleteCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps): Promise<void> {
        if (!id) {
            throw new Error('ID do cliente é obrigatório');
        }

        try {            
            const customers = await Customer.scan('id').eq(id).exec();
            
            if (!customers || customers.length === 0 || !customers[0]) {
                throw new Error('Cliente não encontrado');
            }
            
            const customer = customers[0];
            console.log('Cliente encontrado:', customer);
            
            const client = new DynamoDBClient({});
            const docClient = DynamoDBDocumentClient.from(client);
            
            const command = new DeleteCommand({
                TableName: 'Clientes',
                Key: {
                    id: customer.id,
                    email: customer.email
                }
            });
            
            await docClient.send(command);
            
            console.log('Cliente deletado com sucesso');
        } catch (error: any) {
            console.error('Erro detalhado ao deletar cliente:', error);
            throw error;
        }
    }
}

export { DeleteCustomerService };