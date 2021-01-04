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
docker restart
```
* Pour la le déploiment de gitlab, il faut impérativement définir le mot de passe pour le compte root. Au delà, le token de définition de mot de passe vas disparaitre et l'application retournera systématiquement une erreur 502.
  ker exec -it gitlab /bin/bash
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
docker restart
```
* Pour la le déploiment de gitlab, il faut impérativement définir le mot de passe pour le compte root. Au delà, le token de définition de mot de passe vas disparaitre et l'application retournera systématiquement une erreur 502.
