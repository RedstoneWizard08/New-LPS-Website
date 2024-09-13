FROM node:22-bullseye

RUN apt-get update && \
    apt-get -y install bash && \
    npm install --global pnpm && \
    mkdir -p /usr/src/website

COPY . /usr/src/website
WORKDIR /usr/src/website

ENV HOST=0.0.0.0
ENV PORT=4000

RUN pnpm install && \
    pnpm run build

WORKDIR /usr/src/website/dist/server

COPY docker/run.sh /usr/src/website/dist/server

EXPOSE 4000
ENTRYPOINT ["/bin/bash", "/usr/src/website/dist/server/run.sh"]
