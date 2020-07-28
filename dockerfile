FROM node:10.0
RUN mkdir -p /usr/src/nodejs/
WORKDIR /usr/src/nodejs/
COPY package.json /usr/src/app/package.json
RUN cd /usr/src/app/
RUN npm i
COPY ./ /usr/src/nodejs/
EXPOSE 3000
CMD npm run dev