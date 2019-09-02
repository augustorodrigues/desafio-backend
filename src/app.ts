import express from 'express';
import routes from './routes';

class App {
    server: any;
    constructor() {
        this.server = express();
        
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
        this.server.use(express.static("public"));
    }
}

export default new App().server;