## Description

A REST API to handle users and their jobs using MondoDB and NestJS.

## Install/Running 

```bash
# install dependencies
$ yarn install

# build image
$ docker compose up -d

# run migrations
$ docker exec -it server-dev npm run migrate:up
```

## Try a request

1. Install

2. Go to `/src/domain/user/user.rest` or `/src/domain/job/job.rest` and click in `Send Request`.

You can modify the parameters in the urls and the data sended.

## TBD

- Unit tests and E2E tests