# container docker sql
docker run --name kabrum-database -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=kabrum -d -p 3306:3306 mysql:latest
