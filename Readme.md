# Consignes pour le déploiement de l'infrastructure
docker-compose up -d
sudo doc# Consignes pour le déploiement de l'infrastructure
docker-compose up -d
sudo docker exec -it gitlab /bin/bash
docker-compose ps
docker conatainer rm
docker ps -a
docker inspect name
docker-compose restart
* Pour déployer Sonarcube sur windows il faut modifier la capacité de la vm de docker avec les commandes suivantes:
```console
wsl -d docker-desktop
sysctl -w vm.max_map_count=262144
cat /proc/sys/vm/max_map_count
sysctl -p
echo -e "\nvm.max_map_count = 262144\n" >> /etc/sysctl.d/00-alpine.conf 
echo -e "\nvm.max_map_count = 262144\n" >> /etc/sysctl.conf
docker restart
echo -e "262144" >> /proc/sys/vm/max_map_count
```
