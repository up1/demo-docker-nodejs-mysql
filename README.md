# Docker Workshop

- Web => [NodeJS](https://hub.docker.com/_/node)
- Database => [MySQL](https://hub.docker.com/_/mysql)

## List of workshops

- [Working with docker command](https://github.com/up1/demo-docker-nodejs-mysql/blob/main/docker-command.md)
- [Working with docker compose](https://github.com/up1/demo-docker-nodejs-mysql/blob/main/docker-compose.md)


## Run API testing with Postman + Newman
```
$docker container run --rm \
  -v $(pwd)/postman:/etc/newman -t \
  postman/newman run demo-imc.postman_collection.json
```

[DNS Name of Host](https://docs.docker.com/docker-for-mac/networking/) : `host.docker.internal`
