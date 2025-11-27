import type { FastifyReply, FastifyRequest } from "fastify";
import { listCustomersService } from '../repository/listCustomersService.js';
 

class listCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const listCustomerService = new listCustomersService();       
            
            const customers = await listCustomerService.execute();

            reply.status(200).send(customers);
        } catch (error) {
            const err = error as Error;
            reply.status(400).send({ error: err.message });
        }
    }
}

export { listCustomersController };