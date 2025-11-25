import type { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomerService } from '../services/deleteCustomerService.js';

class deleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as {id: string};

    const CustomerService = new DeleteCustomerService();

    const customer = await CustomerService.deleteCustomerController({ id });

    return reply.status(200).send(customer);
    }
}

export { deleteCustomerController }