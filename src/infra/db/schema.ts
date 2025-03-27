import { text, serial, mysqlTable } from "drizzle-orm/mysql-core";

export const sizeTable = mysqlTable('size_table',{
    id: serial().primaryKey(),
    sizes: text({enum: ['pequena', 'grande', 'extra grande']}) //aqui ta declarado o enum, professor!
})

