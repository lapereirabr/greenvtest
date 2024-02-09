# Aplicacao desenvolvida para Node usando:

	1 Typescript 
	2 Acessando banco de dados postgress
	3 Usando o Jest para teste de integração e testes unitário.
		Teste Integração: compõe chamadas restfull
		Teste Unitarios: poderão ser criados a partir dos mesmos arquivos a partir da resultado da chamada restfull
	4 Disponibilizando uma collection Postmanm
	5 E um docker composer para subida via container
	
	##Importante:## 
	
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
	

