import { Cliente } from '../models/Cliente.js';

class listCustomersService {
    async execute(){
        const customers = await Cliente.scan().exec();
        return customers;
    }
}

export { listCustomersService };