import { config } from 'mssql';

const sqlServerConfig: config = {
  user: 'cris',
  password: '123456789',
  server: 'localhost', 
  database: 'notesdb', 
  options: {
    encrypt: true, 
  },
};

export { sqlServerConfig };
