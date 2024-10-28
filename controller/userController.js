let users = [
    {id: 1, nome: "Davi", email: "davi@email.com"},
    {id: 2, nome: "Ryan", email: "ryan@gmail.com"}
]

const getAllUsers = (_req, res) => {
    res.json(users);
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id == userId);
    if (!user) {
        const error = new Error("Usuário não encontrado!");
        error.statusCode = 404;
    }
    res.json(user);
}

const createUser = (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res
        .status(400)
        .json({error: "Nome e e-mail são obrigatórios!"})
    }
    const newUser = {
        id: users.length + 1,
        nome,
        email
    }
    users.push(newUser);
    res.status(201).json(newUser);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}