# anime-list

## Project setup
```
node server.js
```

## add migration
```
use command "npx sequelize migration:generate --name fance_migration_name"
```

## run migration
```
npx sequelize-cli db:migrate
```

## undo migration
```
npx sequelize-cli db:migrate:undo
```