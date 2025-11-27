import { Customer } from '../models/customer.js';

class listCustomersService {
    async execute(){
        const customers = await Customer.scan().exec();
        return customers;
    }
}

export { listCustomersService };