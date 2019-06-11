FROM php:cli-alpine

RUN apk update && apk add mysql-client \
    && docker-php-ext-install pdo_mysql
