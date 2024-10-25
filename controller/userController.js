let users = [
    {id: 1, nome: "Davi", email: "davi@email.com"},
    {id: 2, nome: "Ryan", email: "ryan@gmail.com"}
]

const getAllUsers = (_req, res) => {
    res.json(users);
}

module.exports = {
    getAllUsers
}