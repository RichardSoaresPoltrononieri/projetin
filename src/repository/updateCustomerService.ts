import { Customer } from '../models/customer.js';

interface updateCustomerProps {
    id: string;
    name?: string;
    email?: string;
    active?: boolean;
}


class updateCustomerService {
  async execute({ id, name, email, active }: updateCustomerProps) {
        if (!id) {
            throw new Error ('Id é obrigatório');
        }

    const customer = await Customer.get(id);
        if (!customer) {
            throw new Error ('Cliente não encontrado');
        }
    
    const updateData: Partial<{
        name: string;
        email: string;
        active: boolean;
        updated_at: string;
    }   > = {
        updated_at: new Date().toISOString()
    };

    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (active !== undefined) updateData.active = active;

    const updateCustomer = await Customer.update ({ id }, updateData);

    return updateCustomer;
    }
}

export { updateCustomerService };