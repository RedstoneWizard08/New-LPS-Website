FROM node:22-bullseye

RUN apt-get update && \
    apt-get -y install wget gnupg curl bash

RUN install -d -m 0755 /etc/apt/keyrings && \
    wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | \
        tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null && \
    echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | \
        tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null

COPY docker/mozilla.prefs /etc/apt/preferences.d/mozilla

RUN apt-get update && \
    apt-get -y install firefox-nightly=129.0a1~20240707205150

RUN npm install --global pnpm

RUN mkdir -p /usr/src/website
COPY . /usr/src/website
WORKDIR /usr/src/website

ENV REDSTONE_IS_DUMB=1

RUN pnpm install
RUN pnpm run build

WORKDIR /usr/src/website/dist/server

COPY docker/run.sh /usr/src/website/dist/server

EXPOSE 4000
CMD ["/usr/bin/bash", "/usr/src/website/dist/server/run.sh"]
