import { v4 as uuid } from "uuid";

let users = []

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    user.push({ ...user, id: uuid() });
    res.send("User created successfully")
}