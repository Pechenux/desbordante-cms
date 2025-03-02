FROM mirror.gcr.io/node:17-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
COPY ./package.json cms/package.json
COPY ./yarn.lock cms/yarn.lock
WORKDIR /cms/
RUN yarn
COPY ./ /cms/
RUN yarn build
ENTRYPOINT ["yarn", "start"]
