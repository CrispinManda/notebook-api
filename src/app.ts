import express from 'express';
import noteRoutes from './routes/noteRoutes';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { sqlServerConfig } from './config'; // Import SQL Server config
import { createConnectionPool } from './db'; // Implement a connection pool

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', noteRoutes);


createConnectionPool(sqlServerConfig);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
