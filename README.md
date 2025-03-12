# Stylish
A CTF challenge involving a vulnerable website.

> Looking for some awesome styles for your webpages? Check out my new site, where you can live preview these epic stylesheets!

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
Feel free to look at the source code to find the vulnerability. Try to see if you can get the contents of the `flag.txt` file!
