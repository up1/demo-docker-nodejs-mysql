## Working with Docker compose

Build images

```
$docker-compose build
```

Create database containers

```
$docker-compose up -d db
$docker-compose ps
$docker-compose logs --follow
```

Create web container

```
$docker-compose up -d web
$docker-compose ps
$docker-compose logs --follow
```

Delete all containers

```
$docker-compose down
$docker volume prune
```
