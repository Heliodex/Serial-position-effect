import pg from "pg"
import "dotenv/config"

const pool = new pg.Pool({
	host: process.env.PGHOST,
	user: process.env.PGUSER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
})

export default pool
