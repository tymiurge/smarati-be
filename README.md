# to run 
```
node index.js
```
# Containers

There are 2 types of the app containerization:
- full (rest api server + mongo + data volumns)
- db only



## Full container: connecting to mongodb inside container

```
cd docker/mongo-datavol
docker-compose up
```


## Full container: connecting to mongodb inside container

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


# to debug 
https://medium.com/@creynders/debugging-node-apps-in-docker-containers-through-webstorm-ae3f8efe554d

# to run mongo in container
https://gist.github.com/goliatone/5bc8289d944ee2eef7d1c73f0013eec1

and better here:
https://www.linkedin.com/pulse/persistent-mongo-storage-using-docker-matthew-dickerson

