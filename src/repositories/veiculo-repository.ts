import Veiculo from '../models/veiculo'
import database from './database'

const veiculoRepository = {
	criar: (item: Veiculo, callback: (res: any) => void) => {
		const sql = `INSERT INTO public.veiculo (v_dsc, v_plc, usu_id, c_id) 
			VALUES ('${item.v_dsc}', '${item.v_plc}', ${item.usu_id}, ${item.c_id}) returning v_id;`;
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
		},

	lerTodos: (callback: (itens: Veiculo[]) => void) => {
		const sql = 'SELECT * FROM public.veiculo;'
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	ler: (id: number, callback: (res?: any) => void) => {
		const sql = `SELECT * FROM public.veiculo WHERE v_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));

	},

	atualizar: (id: number, item: Veiculo, callback: (res: any) => void) => {
		const sql = `UPDATE public.veiculo SET v_dsc='${item.v_dsc}', v_plc='${item.v_plc}'
			, usu_id=${item.usu_id}, c_id=${item.c_id}
		 WHERE v_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	},

	apagar: (id: number, callback: (res: any) => void) => {
		const sql = `DELETE FROM public.veiculo WHERE v_id = ${id};`
		database.query(sql).then(res => callback(res.rows)).catch(err => callback(err));
	}
}

export default veiculoRepository
