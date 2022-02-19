# Showcase VSCode devcontainers

This project demostrates how to execute devcontainers  

## Installation

We need to install [Docker](https://docs.docker.com/get-docker/) and [VSCode](https://code.visualstudio.com/) with [Remote-Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) isntalled.

## Usage

There are different branches for different purposes.

The first one called _default_ contains the basic configuration of devcontainer with its own Dockerfile for development.

The second one called dockerfile is generated from a repository Dockerfile (an image that can be used in production)

Finally, the third one called docker-compose is generated from a docker-compose.yml that contains the service to be developed and an external cache service. This devcontainer, in addition to launching the dependent services, also installs the Redis extension in the IDE itself. 

In each of them and once opened in container mode you can run `yarn dev` and this will automatically enable the internal port of the container (port 3000) where it runs to a not used one on the host machine to allow opening browser on this port.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
