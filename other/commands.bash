# derrubar app compose e subir novamente
docker-compose down && docker-compose up -d

# remover todos os containers
docker rm $(docker ps -aq)

# remover todas as imagens
docker rmi $(docker images -q)

# @@@
docker-compose down && docker rmi $(docker images -q) && docker-compose up -d