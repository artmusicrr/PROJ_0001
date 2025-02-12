// lib/db.ts
import { Pool, PoolConfig, QueryResult } from 'pg';

// Create a configuration object for the connection pool
const poolConfig: PoolConfig = {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'projectdb',
    password: process.env.DB_PASSWORD || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432'),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
// Create a new pool instance
const pool = new Pool(poolConfig);

// Basic query method
export async function query(text: string, params?: any[]): Promise<QueryResult> {
  try {
    return await pool.query(text, params);
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Method to get a client from the pool
export async function getClient() {
  return await pool.connect();
}

// Graceful shutdown
export async function closePool() {
  await pool.end();
}

// Error handling for pool
pool.on('error', (err: any) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// PostgreSQL connection setup
const pgPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

export const pgQuery = async (text: string, params?: any[]) => {
  try {
    const result = await pgPool.query(text, params);
    return result;
  } catch (err) {
    console.error('Database query error', err);
    throw err;
  }
};

export default pgPool;