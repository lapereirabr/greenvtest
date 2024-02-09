### Aplicacao desenvolvida para Node usando:

1 Typescript;
2 Acessando banco de dados postgress;
3 Usando o Jest para teste de integração e testes unitário:
Teste Integração: compõe chamadas restfull;
Teste Unitarios: poderão ser criados a partir dos mesmos arquivos a partir da resultado da chamada restfull;
4 Disponibilizando uma collection Postmanm;
5 E um docker composer para subida via container;

##Importante:

A idéia dessa aplicação é fornecer um exemplo SIMPLES, porém completo, dessa arquitetura. Nem todos os endpoints do postman foram criados, tampouco 
todos os potenciais testes de integração e unitários.
Seria possível se pensar em uma arquitetura mais robusta, em camadas, mas a idéia aqui é mostrar a base de uma arquitetura RESTFULL em NodeJS e Typescript.

Nem todos testes foram executados, podendo assim haver bugs, mas a idéia aqui é prover um exemplo, deixando a cargo de quem for utulizá-lo, avançar na implementação
e na depuração de eventuais bugs.

### Requisitos

O framework de testes escolhido foi o Jest.
	
### Rodando a aplicação
	
Inicialmente, instale os pacotes utilizados utilizando o comando: npm istall

Para rodar a aplicação: yarn dev
Para rodar os tetes: yarn test
	

### Modelo banco de dados

![image](https://github.com/lapereirabr/greenvtest/assets/4419118/9349bd30-44d6-412a-830d-f8686d86e51b)

### Scripts

O script de criaçao do bando de dados pode ser encontrado no diretório raiz do projeto: script banco de dados.sql

Foi inserido um usuario ao final para que o token de segurança ao acessar os endpoints sejam validados

INSERT INTO public.usuario
(usu_nm, usu_cpf, usu_email, usu_telef, c_id, usu_token)
VALUES('Usuario 1', 12334567800 'email@email.com', 1199991234, '2b3375322b62e68dbb521252f06e41fff24e93d6');

Esse mesmo token já está configurado nas chamadas implementadas na collection do postman,que tbm pode ser encontrada no diretório raiz: Greenv.postman_collection.json



