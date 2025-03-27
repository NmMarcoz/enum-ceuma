import { text, serial, mysqlTable, mysqlEnum } from "drizzle-orm/mysql-core";

export const sizeTable = mysqlTable('size_table',{
    id: serial().primaryKey(),
    sizes: mysqlEnum(['pequena', 'grande', 'extra grande'])
})

