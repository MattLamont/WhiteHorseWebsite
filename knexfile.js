module.exports = {

  development: {
    client: 'pg',
    version: '7.0.2',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: true,
      port: process.env.PG_PORT
    }
  }
}
