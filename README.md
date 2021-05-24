# Rest API snapshot testing

This repository contains 2 simple demo solutions with the most used frameworks for case with rest API snapshot testing:
- jest
- mocha (with package [snap-shot-it](https://github.com/bahmutov/snap-shot-it/blob/master/README.md))

## API requests

Both solutions uses package [axios](https://github.com/axios/axios) for calling APIs.

### Tested page

`https://gorest.co.in` with public API `https://gorest.co.in/public-api`

### Covered API methods

- GET returns data resource
- POST is always for creating a resource ( does not matter if it was duplicated )
- PUT is for checking if resource is exists then update , else create new resource
- PATCH is always for update a resource
- DELETE removes data resource

### Bearer token

Request methods PUT, POST, PATCH, DELETE needs access token, which needs to be passed in "Authorization" header as Bearer token.
[Create access token here.](https://gorest.co.in/consumer/login)

#### Environment variables

Both folders `jest_snapshot` & `mocha_snapshot` contain file `.env.dist`. Create a copy of file in the same folder and rename it as `.env`.
Generated bearer token paste to `.env` files in demo folders.

It should look like this:

```
ACCESS_TOKEN=Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Let's go start

- in `terminal` go to one of folders `cd someFolder`
- run `npm install` for install all dependencies
- run `npm run gorest:integration` for test running

## Snapshots

- versioned in git in folder `__snapshots__`
- for the first run are generated automatically
- for the second and another run are compared snapshots from repository with actual state on server side
