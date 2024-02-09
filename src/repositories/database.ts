import {Pool} from 'pg';

const database = new Pool({
  host: 'localhost',
  user: 'postgres',
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  password: "Hal@9000",
  database: "greenv",
  port: 5432
})

export default database