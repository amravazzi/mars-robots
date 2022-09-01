# Martian Robots

This repo is an implementation of the ["Martian Robots"](CHALLENGE.md) problem using Clean Architecture, some DDD and SOLID principles

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

Everything resides in `src` folder, even the entrypoint of the application. And the tests, in `__tests__` folder.

Inside `src`, there are 4 main folders, the entrypoint file `index.ts` and the "telemetry" file with all the planet and robots input, `telemetry.txt`.

### Folders

- **domain**: resides the application's core business, represented as classes and interfaces.

- **usecases**: the usecases for the program, in which interactions between core business domains are made.

- **infra**: the infrastructure layer in which resides componets that connects and abstracts the communication with outside the main logic of the application

- **main**: program's setup and factories

## Opportunities for improvement

### Technical debts

There are some technical debts mapped inside the application, tagged with a `TODO` comment. For example, there are some typing issues due to the use of `enum` that shall be solved to improve the application maintainability.

### Test cases

There might have some test cases that were not covered and should be assessed.

### IO validation

It was not considered all the possible input validation, only the ones explicitly expressed in the challenge text. For example, extra spaces or newlines in the `telemetry.txt` file might break the application input.

## License

This repo is licensed under MIT. See [license file](LICENSE).