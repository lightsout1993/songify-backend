import { DataSource } from 'typeorm';

import { getConfigDatabase } from '../config/database.config';

const dataSourceOptions = getConfigDatabase();

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
