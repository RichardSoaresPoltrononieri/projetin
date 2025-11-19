import { ddb } from '../config/creds.js';
import { DeleteItemCommand } from '@aws-sdk/client-dynamodb';

interface DeleteCustomerProps {
  id: string;
}

class deleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if(!id || id.trim() === ''){
        throw new Error("Por favor informar o ID que deseja excluir.");
    }

    try {
      console.log(`[deleteCustomerService] Attempting to delete customer with ID: ${id}`);
      
      const command = new DeleteItemCommand({
        TableName: 'Clientes',
        Key: {
          id: { S: id }
        }
      });

      await ddb.send(command);
      console.log(`[deleteCustomerService] Customer deleted successfully`);

      return { message: "Deletado com sucesso!" };
    } catch (error) {
      const err = error as Error;
      console.error(`[deleteCustomerService] Error:`, err.message, err.stack);
      throw new Error("Cliente não encontrado.");
    }
  }
}

export { deleteCustomerService };