import type { FastifyRequest, FastifyReply } from 'fastify';
import { updateCustomerService } from '../repository/updateCustomerService.js';

class updateCutomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string };
            const { name, email, active } = request.body as {
                name?: string;
                email?: string;
                active?: boolean;
            };
            
            const customerService = new updateCustomerService();
            const customer = await customerService.execute({ id, name, email, active });
            
            reply.status(200).send(customer);

        } catch (error) {
            const err = error as Error;
            reply.status(400).send({ error: err.message });
        }
    }
}

export { updateCutomerController };