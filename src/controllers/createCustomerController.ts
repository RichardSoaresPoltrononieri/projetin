import type { FastifyRequest, FastifyReply } from 'fastify';
import { createCustomerService } from '../services/createCustomerService.js';

class createCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };

    const customerService = new createCustomerService();
    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}

export { createCustomerController };
