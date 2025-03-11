# Stylish
A CTF challenge involving a vulnerable website.

## Setup
Minimally, you only need Docker to run the challenge.
```sh
docker run -ti --name "stylish" -p 3000:3000 jordanchesley/stylish
```
Or, you can use the given Docker Compose file to run the container. In the same directory as the `compose.yaml`:
```
docker compose up -d
```
The container will bind to your port 3000. Feel free to modify this port as necessary.

## Challenge
In order to solve the challenge, you can refer to the source code to find the vulnerability. Exploit the container to try to get the flag!
