import type { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { createCustomerController } from './serializer/createCustomerController.js';
import { listCustomersController } from './serializer/listCustomersController.js';
import { deleteCustomerController } from './serializer/deleteCustomerController.js';
import { updateCustomerController } from './serializer/updateCustomerController.js';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  console.log('Rotas registradas e iniciadas, servidor inicializado!');

  fastify.post('/create-customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new createCustomerController().handle(request, reply);
  });

  fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
    return new listCustomersController().handle(request, reply);
  });

  fastify.put('/customer/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    return new updateCustomerController().handle(request, reply);
  });

  fastify.delete('/customer/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    return new deleteCustomerController().handle(request, reply);
  });
  
}   