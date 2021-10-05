## Description

PPM project Full stack

## Installation

```bash
$ npm install -g @nrwl/cli
$ npm install
```

## Running the app

```bash
# configuration file
$ create .env and copy from .env.development

# DB
$ sudo docker-compose up

# development
$ npm run start

# Back-end run
$ nx serve api
# Front-end run
$ nx serve

# Migrate mongo db up
$ npm run migration:up

# Swager
$ http://localhost:3333/api/
# Front-end
$ http://localhost:4200
```
