FROM node:10.0
RUN mkdir -p /usr/src/nodejs/
WORKDIR /usr/src/nodejs/
COPY package.json /usr/src/app/package.json
RUN cd /usr/src/app/
RUN npm i
COPY ./ /var/plan/
EXPOSE 3000

RUN cd /var/plan/ && \
    rm -rf node_modules && \
    npm install --save --registry=https://registry.npm.taobao.org
RUN mkdir /var/logs
RUN cnpm install
CMD ["node","/var/plan/bin/www"]