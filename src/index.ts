import { server } from './shared/server';

// Inicia o sevidor
const startServer = () => {
	server.listen(4000, () => {
	  console.log(`Servidor rodando em: http://localhost:4000`);
	});
  };

  startServer();
