import staticRoutes from './static-routes.js';
import SimpleDb from './simple-db';

const app = async () => {
    await get(req, res) {
        const [, index] = req.url.split('/');

        if(index === '/') {
            res.setHeader('Content-Type', 'text/html');
            res.end(JSON.stringify(index));
        } else (
            res.statusCode = 404;
            res.end('404: dog not found');
        )
    }
};

export default app; 
