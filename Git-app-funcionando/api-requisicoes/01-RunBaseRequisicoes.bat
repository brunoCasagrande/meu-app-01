mongod --port 27018 --dbpath ..\basesmongo\baserequisicoes --auth 

rem -- sem autenticação -- mongo --port 27018 
rem -- com autenticação -- mongo --port 27018 -u "admin" -p "admin" --authenticationDatabase "baserequisicoes"  
rem -- Compass/Node:  mongodb://admin:admin@localhost:27018/baserequisicoes?authSource=baserequisicoes
