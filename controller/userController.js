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

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { nome, email } = req.body;

    const userIndex = users.findIndex((u) => u.id == userId);
    if (userIndex === -1) {
        return res.status(404).json({error: "usuário não encontrado!"})
    }

    if (nome) users[userIndex].nome = nome;
    if (email) users[userIndex].email = email;
    // users[userIndex] = {
    //     ...users[userIndex],
    //     nome,
    //     email
    // };
    res.json(users[userIndex]);
}

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.find((u) => u.id !== userId);
    res.json({message: "Usuário deletado com sucesso!"})
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
