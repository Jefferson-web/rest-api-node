import { Router } from 'express';

class RoutesUsuarios {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get("/", (req, res) => res.send("findAll"));
        this.router.get("/:id", (req, res) => res.send("Obteniendo el id " + req.params.id));
        this.router.post("/", (req, res) => {
            let body = req.body;
            res.json({
                usuario: body
            })
        });
        this.router.put("/:id", (req, res) => res.send("actualizando el id " + req.params.id));
        this.router.delete("/:id", (req, res) => res.send("Eliminando el id " + req.params.id));
    }

}

const routesUsuarios = new RoutesUsuarios();

export default routesUsuarios.router;