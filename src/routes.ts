import type { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { createCustomerController } from './controllers/createCustomerController.js';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post('/create-customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new createCustomerController().handle(request, reply);
  });
}   