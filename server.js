const express = require('express');

const ProjectsRouter = require('./routers/projectsRouter.js');
const ResourcesRouter = require('./routers/resourcesRouter.js');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);

module.exports = server;
