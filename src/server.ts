import dotenv from 'dotenv';
import Fastify from 'fastify';
import { routes } from './routes.js';
import cors from '@fastify/cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../.env.dev');

dotenv.config({ path: envPath });

const app = Fastify({ logger: true });

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try {
        await app.listen({ port: 4040, host: '0.0.0.0' })

    } catch (error) {
        app.log.error(error);
        process.exit(1);
        
    }
}

start();