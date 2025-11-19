import type { FastifyReply, FastifyRequest } from "fastify";
import { deleteCustomerService } from '../services/deleteCustomerService.js';


class deleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.query as { id: string}

            const customerService = new deleteCustomerService();

            const customer = await customerService.execute({ id });

            return reply.status(200).send(customer);
        } catch (error) {
            const err = error as Error;
            reply.status(400).send({ error: err.message });
        }
    }

}

export { deleteCustomerController }