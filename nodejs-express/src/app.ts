import { createServer, IncomingMessage, ServerResponse } from 'http';
import homeHandler from './endpoints/home';
import notFoundHandler from './endpoints/not-found';
import pingHandler from './endpoints/ping';

const PORT = 3000;

const ROUTES: Record<string, (req: IncomingMessage, res: ServerResponse) => void> = {
    ['/']: homeHandler,
    ['/not-found']: notFoundHandler,
    ['/ping']: pingHandler,
};

const server = createServer((req, res) => {
    console.log(req.url);
    if (!(req.url in ROUTES)) {
        ROUTES['/not-found'](req, res);
        return;
    }
    ROUTES[req.url](req, res);
});

server.listen(PORT, () => {
    console.log('listening...');
});
