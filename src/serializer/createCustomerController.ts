import type { FastifyRequest, FastifyReply } from 'fastify';
import { createCustomerService } from '../repository/createCustomerService.js';

class createCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, email } = request.body as { name: string; email: string };

      const customerService = new createCustomerService();
      const customer = await customerService.execute({ name, email });

      reply.status(201).send(customer);
    } catch (error) {
      const err = error as Error;
      reply.status(400).send({ error: err.message });
    }
  }
}

export { createCustomerController };
