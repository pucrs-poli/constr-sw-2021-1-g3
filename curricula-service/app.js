import express from 'express';
import mongoose from "mongoose";

class App{
    constructor(port = 5000){
        this.port = port;
        this.server = express();
        this.useMiddlewares();
        this.startDatabase('mongodb://localhost:27017/test');
        this.startServer();
    }

    static instance() {
        if (!App._instance) {
          App._instance = new App();
        }
        return App._instance;
    }

    useMiddlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
    }

    startDatabase(url) {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    startServer() {
        this.server.listen(this.port, () => console.log(`Server now listening at ${this.port}`));
    }
}

const server = App.instance();