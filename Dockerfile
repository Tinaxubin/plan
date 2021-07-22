FROM node:10.0
ENV NODE_ENV=production
WORKDIR /plan
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "./bin/www" ]
