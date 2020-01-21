import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routesUsuarios from './Routes/routesUsuarios';
import bodyParser from 'body-parser';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }))

        // parse application/json
        this.app.use(bodyParser.json())
    }

    routes(): void {
        this.app.use("/api/usuarios", routesUsuarios);
    }

    start(): void {
        this.app.listen(this.app.get('port'));
        console.log('El puerto ' + this.app.get('port') + ' esta habilitado.');
    }

}

const server = new Server();
server.start();