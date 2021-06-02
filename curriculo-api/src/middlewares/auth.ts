import 'dotenv/config';
import { Request, Response } from 'express';
import axios from 'axios';

export const authorizer = async (req: Request, res: Response, next: () => any) => {

    if(req.headers.authorization) {
        const response = await axios.get(`https://${process.env.KEYCLOAK_HOST}:${process.env.PORT}/auth/realms/${process.env.REAM_NAME}/protocol/openid-connect`, {
            headers: { Authorization: req.headers.authorization }
        });
        // res.send(response); // ?
        next();
    } else {
        res.status(401).json('UNAUTHORIZED');
    }
}