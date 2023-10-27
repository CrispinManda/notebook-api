import { ConnectionPool, config } from 'mssql';

let connectionPool: ConnectionPool;

export function createConnectionPool(dbConfig: config) {
  connectionPool = new ConnectionPool(dbConfig);
}

export function getConnectionPool() {
  return connectionPool;
}
