import 'dotenv/config'
import keycloak from '../config/keycloak';
import server from '../config/server';

server.post('/auth', async(req, res) => {
    try {
        await keycloak.auth({
            username: req.body.username,
            password: req.body.password,
            grantType: 'password',
            clientId: req.body.clientId,
            totp: '123456',
            clientSecret: req.body.secret
        });

        res.status(200).send({
            accessToken: keycloak.accessToken,
            refreshToken: keycloak.refreshToken
        });
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

server.post('/users', async(req, res) => {
    try {
        const user = await keycloak.users.create(req.body.user);
        res.send(user);
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

server.patch('/users', async(req, res) => {
    try {
        const user = await keycloak.users.update({id: req.body.id}, req.body.user);
        res.send(user);
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

server.put('/users', async(req, res) => {
    try {
        const user = await keycloak.users.update({id: req.body.id}, req.body.user);
        res.send(user);
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

server.get('/users', async(req, res) => {
    try {
        const users = await keycloak.users.find();
        res.send(users);
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

server.get('/users/:id', async(req, res) => {
    try {
        const user = await keycloak.users.findOne({id: req.params.id});
        res.send(user);
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

server.delete('/users', async(req, res) => {
    try {
        await keycloak.users.del({id: req.body.id});
        res.status(200).send();
    } catch (e) {
        res.status(401).send({error: "Error processing resource"})
    }
});

export default server;
