# Simple Twitter Clone

O projeto foi desenvolvido na semana Omnistack 5 da RocketSeat.

O objetivo é simular uma aplicação muito simples do twitter utilizando socket.io para synchronizar os tweets em tempo real.

## Tecnologias utilizadas

Node, React e MongoDB.

## Instalação

### Pré-requisitos

* Conta no mLab https://mlab.com/
* NodeJS https://nodejs.org/en/

Clonar este repositório:

```sh
git clone https://github.com/darian-beluzzo/simple-twitter-clone
```
### Configurar MongoDB no mLab<br>
Crie uma conta em <a href="http://mlab.com">mlab.com</a>, crie um novo MongoDB Deployment, crie um novo usuario, copie a MongoDB URI no seu dashboard,cole no arquivo de conexão(backend/src/index.js),e altere os dados conforme os seus:<br>
```
mongoose.connect('mongodb://<dbuser>:<dbpassword>@dsxxxxx.mlab.com:21475/<nomeDoSeuBancoAqui>', { useNewUrlParser: true });
```
Dentro de ambas as pastas(frontend, backend) rode:
```
yarn install
```
```
yarn start
```
