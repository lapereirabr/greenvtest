-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: new_database | type: DATABASE --
-- DROP DATABASE IF EXISTS new_database;
CREATE DATABASE new_database;
-- ddl-end --

-- object: public.usuario | type: TABLE --
-- DROP TABLE IF EXISTS public.usuario CASCADE;
CREATE TABLE public.usuario (
	usu_id bigserial NOT NULL,
	usu_nm varchar(100) NOT NULL,
	usu_cpf bigint NOT NULL,
	usu_email varchar(100) NOT NULL,
	usu_telef bigint NOT NULL,
	c_id bigint,
	usu_token varchar(50),
	CONSTRAINT usuario_pk PRIMARY KEY (usu_id)
);
-- ddl-end --
COMMENT ON COLUMN public.usuario.usu_nm IS E'nome';
-- ddl-end --

-- object: public.companhia | type: TABLE --
-- DROP TABLE IF EXISTS public.companhia CASCADE;
CREATE TABLE public.companhia (
	c_id bigserial NOT NULL,
	c_nm varchar(100) NOT NULL,
	c_cnpj bigint NOT NULL,
	c_telef bigint NOT NULL,
	c_email varchar(100) NOT NULL,
	CONSTRAINT companhia_pk PRIMARY KEY (c_id)
);
-- ddl-end --
COMMENT ON COLUMN public.companhia.c_nm IS E'nome';
-- ddl-end --

-- object: public.veiculo | type: TABLE --
-- DROP TABLE IF EXISTS public.veiculo CASCADE;
CREATE TABLE public.veiculo (
	v_id bigserial NOT NULL,
	v_dsc varchar(100) NOT NULL,
	v_plc char(7) NOT NULL,
	usu_id bigint,
	c_id bigint,
	CONSTRAINT veiculo_pk PRIMARY KEY (v_id)
);
-- ddl-end --
COMMENT ON COLUMN public.veiculo.v_plc IS E'placa';
-- ddl-end --

-- object: idx_usu_c | type: INDEX --
-- DROP INDEX IF EXISTS public.idx_usu_c CASCADE;
CREATE INDEX idx_usu_c ON public.usuario
USING btree
(
	c_id
);
-- ddl-end --

-- object: idx_v_usu | type: INDEX --
-- DROP INDEX IF EXISTS public.idx_v_usu CASCADE;
CREATE INDEX idx_v_usu ON public.veiculo
USING btree
(
	usu_id
);
-- ddl-end --

-- object: idx_v_c | type: INDEX --
-- DROP INDEX IF EXISTS public.idx_v_c CASCADE;
CREATE INDEX idx_v_c ON public.veiculo
USING btree
(
	c_id
);
-- ddl-end --

-- object: idx_usu_token | type: INDEX --
-- DROP INDEX IF EXISTS public.idx_usu_token CASCADE;
CREATE UNIQUE INDEX idx_usu_token ON public.usuario
USING btree
(
	usu_token
);
-- ddl-end --

-- object: fk_usu_c | type: CONSTRAINT --
-- ALTER TABLE public.usuario DROP CONSTRAINT IF EXISTS fk_usu_c CASCADE;
ALTER TABLE public.usuario ADD CONSTRAINT fk_usu_c FOREIGN KEY (c_id)
REFERENCES public.companhia (c_id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_v_usu | type: CONSTRAINT --
-- ALTER TABLE public.veiculo DROP CONSTRAINT IF EXISTS fk_v_usu CASCADE;
ALTER TABLE public.veiculo ADD CONSTRAINT fk_v_usu FOREIGN KEY (usu_id)
REFERENCES public.usuario (usu_id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_v_c | type: CONSTRAINT --
-- ALTER TABLE public.veiculo DROP CONSTRAINT IF EXISTS fk_v_c CASCADE;
ALTER TABLE public.veiculo ADD CONSTRAINT fk_v_c FOREIGN KEY (c_id)
REFERENCES public.companhia (c_id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


INSERT INTO public.usuario
(usu_nm, usu_cpf, usu_email, usu_telef, c_id, usu_token)
VALUES('Usuario 1', 12334567800 'email@email.com', 1199991234, '2b3375322b62e68dbb521252f06e41fff24e93d6');