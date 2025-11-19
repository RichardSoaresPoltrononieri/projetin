import type { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { createCustomerController } from './controllers/createCustomerController.js';
import { listConsumersController } from './controllers/listCustomersController.js';
import { deleteCustomerController } from './controllers/deleteCustomerController.js';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  console.log('[Routes] Registering routes...');
  
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log('[GET /test] Request received');
    return { ok: true };
  });

  fastify.post('/create-customer', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log('[POST /create-customer] Request received');
    return new createCustomerController().handle(request, reply);
  });

  fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log('[GET /customers] Request received');
    return new listConsumersController().handle(request, reply);
  });

  fastify.delete('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log('[DELETE /customer] Request received');
    return new deleteCustomerController().handle(request, reply);
  });
  
  console.log('[Routes] All routes registered');
}   