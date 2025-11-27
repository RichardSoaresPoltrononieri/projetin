import type { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomerService } from '../repository/deleteCustomerService.js';

class deleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { id: string };
    const id = params?.id?.trim();

    console.log('Id recebido para deleção:', id);
    console.log('Parametros da requisição:', request.params);



    if (!id) {
      return reply.status(400).send({ error: 'Customer ID is required' });
    }

    const CustomerService = new DeleteCustomerService();

    await CustomerService.execute({ id });

    return reply.status(200).send({ message: 'Customer deleted successfully' });
    }
}

export { deleteCustomerController }