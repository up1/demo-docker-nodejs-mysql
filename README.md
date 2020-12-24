# Docker Workshop

- Web => NodeJS
- Database => MySQL

## Working with Docker command

#### Step 1 :: Build and run MySQL server

Build image from Dockerfile

```
$docker image build -t db:1.0 ./db
$docker image ls
```

Run database container

```
$docker container run -d \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_DATABASE=demodb \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=password \
    --name db \
    db:1.0

$docker container ls

CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                 NAMES
db1f924eb208   db:1.0    "docker-entrypoint.s…"   17 seconds ago   Up 16 seconds   3306/tcp, 33060/tcp   db
```

Access to container to check data in database server

```
$docker container exec -it db bash
#mysql -uuser -ppassword
>show databases;
>use demodb
>show tables;
>select * from users;
```

#### Step 2 :: Build and run Web server

Build image from Dockerfile

```
$docker image build -t web:1.0 ./web
$docker image ls
```

Run web container

```
$docker container run -d \
    --link db \
    -p 4040:4040 \
    --name web \
    web:1.0

$docker container ls

CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                    NAMES
a75793763006   web:1.0   "docker-entrypoint.s…"   4 seconds ago    Up 4 seconds    0.0.0.0:4040->4040/tcp   web
db1f924eb208   db:1.0    "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes   3306/tcp, 33060/tcp      db

// See log from web container
$docker container logs web --follow
```

Open url in browser

- List all users `http://localhost:4040/users/list`
- Add new user in `http://localhost:4040`

## Working with docker compose
