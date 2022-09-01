# Martian Robots

This repo is an implementation of the ["Martian Robots"](README.md) problem using Clean Architecture, some DDD and SOLID principles

## Getting started

First, the file `telemetry.txt` should be filled with the commands according to the instructions in the challenge.

### With docker

Go to the terminal, in the project root directory and start the docker

```bash
$ docker compose up
```

### Without docker

In the project root directory, first, install the dependencies:

```bash
$ yarn
```

then, start the application

```bash
$ yarn dev:server
```

> n.b.: to run the application without docker you should have previously installed `node` at least v14 and `yarn` at least v1.22

### Running tests

To run the test suite, just:

```bash
$ yarn test
```

## Folder organisation

This program follows some design patterns that reflect firstly in the project tree.

Everything resides in `src` folder, even the entrypoint of the application.