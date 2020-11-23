FROM node:10.0
COPY ./ /var/plan/
EXPOSE 3000

RUN cd /var/plan/ && \
    rm -rf node_modules && \
    npm install --save --registry=https://registry.npm.taobao.org
RUN mkdir /var/logs
CMD ["node","/var/plan/bin/www"]