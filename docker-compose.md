## Working with Docker compose

Clone project
```
$git clone https://github.com/up1/demo-docker-nodejs-mysql.git
$cd demo-docker-nodejs-mysql
```

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

Open url in browser

- List all users `http://localhost:4040/users/list`
- Add new user in `http://localhost:4040`
