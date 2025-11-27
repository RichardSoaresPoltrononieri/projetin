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

            const payload: any = { id };

            if (name !== undefined) payload.name = name;
            if (email !== undefined) payload.email = email;
            if (active !== undefined) payload.active = active;

            const customerService = new updateCustomerService();
            const customer = await customerService.execute(payload);

            reply.status(200).send(customer);

        } catch (error) {
            const err = error as Error;
            reply.status(400).send({ error: err.message });
        }
    }
}

export { updateCutomerController };
