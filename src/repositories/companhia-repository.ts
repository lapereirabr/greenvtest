import Companhia from '../models/companhia'
import database from './database'

const companhiaRepository = {
	criar: (item: Companhia, callback: (res: any) => void) => {
		const sql = `INSERT INTO public.companhia (c_nm, c_cnpj, c_telef, c_email) 
		VALUES ('${item.c_nm}', ${item.c_cnpj}, ${item.c_telef}, '${item.c_email}') returning c_id;`;
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
		},

	lerTodos: (callback: (itens: Companhia[]) => void) => {
		const sql = 'SELECT * FROM public.companhia;'
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	ler: (id: number, callback: (res?: any) => void) => {
		const sql = `SELECT * FROM public.companhia WHERE c_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));

	},

	atualizar: (id: number, item: Companhia, callback: (res: any) => void) => {
		const sql = `UPDATE public.companhia SET 
			c_nm='${item.c_nm}', c_cnpj=${item.c_cnpj}, c_telef=${item.c_telef}, c_email='${item.c_email}'
		 	WHERE c_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	apagar: (id: number, callback: (res: any) => void) => {
		const sql = `DELETE FROM public.companhia WHERE c_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	}
}

export default companhiaRepository

