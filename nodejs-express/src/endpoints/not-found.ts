import { ServerResponse } from 'http';

export default function handler(_, res: ServerResponse) {
    res.writeHead(404, { 'Content-Type': 'application/json' }).end('not found');
}
