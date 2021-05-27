import express from 'express';

class App{
    constructor(port = 5000){
        this.port = port;
        this.server = express();
        this.includeMiddlewares();
        this.start();
    }

    static instance() {
        if (!App._instance) {
          App._instance = new App();
        }
        return App._instance;
    }

    includeMiddlewares(){
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
    }

    start() {
        this.server.listen(this.port, () => console.log(`Server now listening at ${this.port}`));
    }
}

const server = App.instance();