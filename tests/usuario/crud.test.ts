jest.useFakeTimers();
import { StatusCodes } from "http-status-codes";
import Usuario from "../../src/models/usuario";
import { testServer } from "../jest.setup";

describe('Usuarios', () => {

    let usr: Usuario = {
        usu_nm: "Luis Alberto Pereira 2",
        usu_cpf: 12345678900,
        usu_email: 'lapereira.br@gmail.com',
        usu_telef: 1199991234,
        usu_token: '2b3375322b62e68dbb521252f06e41fff',
        c_id: null
    }

    let usu_id = 1;

    it('listar usuarios', () => {
        const result = testServer.get('/api/usuario').then(result => {
            expect(result.statusCode).toEqual(StatusCodes.OK)
            //...
            //diversos expects
        });
    }, 60000);  


    it('criar usuario', () => {
        const result = testServer.post('/api/usuario').send(usr).then(result => {
            expect(result.statusCode).toEqual(StatusCodes.CREATED);
            //...
            //diversos expects
        });
    }, 60000);  


});