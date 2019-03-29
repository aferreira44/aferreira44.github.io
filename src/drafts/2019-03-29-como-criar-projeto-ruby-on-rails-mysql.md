`rails new simple_cms -d mysql`

`sudo apt-get install libmysqlclient-dev`

`docker pull mysql`

`docker run --name mysql_rails -e MYSQL_ALLOW_EMPTY_PASSWORD=true -d mysql:latest`

`docker exec -it mysql_rails /bin/bash`

`CREATE DATABASE simple_cms_development;`

`CREATE DATABASE simple_cms_test;`
