#### Source
https://www.linkedin.com/pulse/persistent-mongo-storage-using-docker-matthew-dickerson

#### Create data volumes
```
docker run -v /data/db -v /data/configdb --name mongostorage busybox echo 'created mongo volumes'
```

#### Run container
```
docker run -d -p 27017:27017 --volumes-from mongostorage --name mongoserver mongo:3.2
```

#### Backup

We mount the current directory as /backup in the container and tar the data directories into /backup.
```$xslt

docker run --rm --volumes-from mongostorage -v $(pwd):/backup busybox bin/sh -c "tar cvf /backup/db.tar /data/db && tar cvf /backup/configdb.tar /data/configdb"
```

You should now have db.tar and configdb.tar files in the current directory. The db.tar file contains the contents of /data/db and configdb.tar file contains the contents of /data/configdb.

#### Restore

```
#simulate a failure
docker stop mongoserver
docker rm mongoserver
docker rm mongostorage

#create a volume
docker run -v /data/db -v /data/configdb --name mongostorage busybox echo 'created mongo volumes'

#restore /data/db directory
docker run --rm --volumes-from mongostorage -v $(pwd):/backup busybox tar xvf /backup/db.tar

#restore data/configdb directory
docker run --rm --volumes-from mongostorage -v $(pwd):/backup busybox tar xvf /backup/configdb.tar

#start server
docker run -d -p 27017:27017 --volumes-from mongostorage --name mongoserver mongo:3.2
```
