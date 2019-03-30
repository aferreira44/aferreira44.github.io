`rails new simple_cms -d mysql`

`sudo apt-get install libmysqlclient-dev`

`docker pull mysql`

`docker run --name simple_cms -e MYSQL_ALLOW_EMPTY_PASSWORD=true -d mysql:5.7`

`docker exec -it simple_cms /bin/bash`

`CREATE USER 'rails_user'@'localhost' IDENTIFIED BY '';`

`CREATE DATABASE simple_cms_development;`

`CREATE DATABASE simple_cms_test;`

`GRANT ALL PRIVILEGES ON *.* TO 'rails_user'@'localhost' IDENTIFIED BY '';`
