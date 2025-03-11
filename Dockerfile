from node:23-alpine

COPY ./flag.txt /flag.txt
COPY ./src /program
WORKDIR /program
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]