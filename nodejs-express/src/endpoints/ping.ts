import { ServerResponse } from 'http';

export default function handler(_, res: ServerResponse) {
    res.writeHead(200, { 'Content-Type': 'application/json' }).end('pong');
}
