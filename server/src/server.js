const app = require('./app.js');
const http = require('http');
const { loadPlanetsData } = require('./models/planet.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}....`);
    })
}

startServer();
