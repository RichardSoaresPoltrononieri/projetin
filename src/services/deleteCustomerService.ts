import { Cliente } from '../models/Cliente.js';


interface DeleteCustomerProps {
  id: string;
} 


class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps): Promise<void> {
        await Cliente.deleteOne({ _id: id });
    }
}

export { DeleteCustomerService };