# crashing-dockerized-node-app

> A node app that crashes automatically after 10 seconds. The purpose is to test the restart features of docker.


## Getting started

Base version:
```
docker build -t node-crash base
docker run --restart=always node-crash
```

Version with forever:

```
docker build -t node-crash-forever forever
docker run node-crash-forever
```
