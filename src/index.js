const express = require('express');
const os = require('os');
const userRoutes = require('../routes/users');
const port = 3000;

const app = express();

app.use(express.json());

app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`API está rodando em ${port}`);
});

app.get('/system', (_req, res) => {
    const systemInfo = {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        uptime: os.uptime(),
    };
    res.json(systemInfo);
});