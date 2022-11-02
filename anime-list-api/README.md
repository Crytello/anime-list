# anime-list

## Project setup

```
node server.js
```

## add migration

```
use command "npx sequelize migration:generate --name fancy_migration_name"
```

## add seeder

```
use command "npx sequelize seed:generate --name fancy_seed_name"

## run migration
```

npx sequelize-cli db:migrate

```

## undo migration
```

npx sequelize-cli db:migrate:undo

```
## run seeds

```

npx sequelize-cli db:seed:all

```

## undo seeds

```

npx sequelize-cli db:seed:undo:all

```

## run only 1 seeder

```

npx sequelize-cli db:seed --seed exact-name-of-seeder

```

```
