import Usuario from '../models/usuario'
import database from './database'

const usuarioRepository = {
	criar: (item: Usuario, callback: (res: any) => void) => {
		const sql = `INSERT INTO public.usuario (usu_nm, usu_cpf, usu_email, usu_telef, c_id, usu_token) 
					VALUES ('${item.usu_nm}', ${item.usu_cpf},'${item.usu_email}' 
					,${item.usu_telef} ,${item.c_id}, '${item.usu_token}' ) returning usu_id;`;
		database.query(sql).then(res => {callback(+res.rows[0]['usu_id']);}).catch(err => {callback(err)});
		},

	lerTodos: (callback: (itens: Usuario[]) => void) => {
		const sql = 'SELECT * FROM public.usuario;'
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	ler: (id: number, callback: (res?: any) => void) => {
		const sql = `SELECT * FROM public.usuario WHERE usu_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));

	},

	atualizar: (id: number, item: Usuario, callback: (res: any) => void) => {
		const sql = `UPDATE public.usuario 
			SET usu_nm='${item.usu_nm}', usu_cpf=${item.usu_cpf}, usu_email='${item.usu_email}'
			, usu_telef=${item.usu_telef}, c_id=${item.c_id}, usu_token='${item.usu_token}' 
			WHERE id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	apagar: (id: number, callback: (res: any) => void) => {
		const sql = `DELETE FROM public.usuario WHERE usu_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	validaToken: (token: string, callback: (flg?: boolean) => void) => {
		const sql = `SELECT * FROM public.usuario WHERE usu_token = '${token}';`
		database.query(sql).then(res => {
			if (res.rowCount == 0) {
				callback(false);
			}
			callback(true);
		}).catch(err => callback(err));

	}

}

export default usuarioRepository
