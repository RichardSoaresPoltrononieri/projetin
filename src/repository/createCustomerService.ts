import { Customer } from '../models/customer.js';
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

    const newCustomer = await Customer.create({
      id: randomUUID(),
      name,
      email,
      active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });

    return newCustomer;
  }
}

export { createCustomerService };