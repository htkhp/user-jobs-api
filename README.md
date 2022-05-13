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

If they all ran successfully, you can access the backend on localhost through port 3000.

## Try a request

If you use VSCode you can do:

- Install a VSCode extension named `REST Client`
- Go to `/src/domain/user/user.rest` or `/src/domain/job/job.rest` and click in `Send Request`.

You can modify the parameters in the urls and the data sended.

Or use the `.rest` files as REST documentation.

## TBD

- Unit tests and E2E 

## Disclaimer

The docker that is here is not *production ready* as it doesn't have the proper security and optimization rules applied.