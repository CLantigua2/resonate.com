// Update with your config settings.

module.exports = {
  // client: 'mysql',
  // connection: {
  //   host: 'localhost',
  //   user: 'root',
  //   password: 'Explode#7',
  //   database: 'development'
  // },
  // testing: {
  // 	client: 'sqlite3',
  // 	connection: {
  // 		filename: './database/test.db3',
  // 	},
  // 	useNullAsDefault: true,
  // 	migrations: {
  // 		directory: './database/migrations',
  // 	},
  // 	seeds: {
  // 		directory: './database/seeds',
  // 	},
  // },
  development: {
		client: 'sqlite3',
		connection: {
			filename: './database/dev.sqlite3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds',
		},
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  useNullAsDefault: true,
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
