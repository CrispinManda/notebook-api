import { config } from 'mssql';

const sqlServerConfig: config = {
  user: 'your_db_user',
  password: 'your_db_password',
  server: 'your_db_server', 
  database: 'your_db_name', 
  options: {
    encrypt: true,
  },
};

export { sqlServerConfig };
