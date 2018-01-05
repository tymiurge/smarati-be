# connecting to mongodb inside container

after running **docker-compose up** run 
```
docker ps
```

the results should look like:
```
Tims-MacBook-Air:~ timlabas$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
8e06ca4ad80a        smaratibe_web       "npm start"              2 hours ago         Up 2 hours          0.0.0.0:3000->3000/tcp     smaratibe_web_1
42a1419a95a0        mongo               "docker-entrypoint..."   2 hours ago         Up 2 hours          0.0.0.0:27017->27017/tcp   smaratibe_mongo_1
```

then run 
```
docker exec -it 42a1419a95a0 bash
```

you're inside container now. run
```
root@42a1419a95a0:/# mongo
> show dbs
```
to validate connection to mongodb

