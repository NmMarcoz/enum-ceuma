import {drizzle} from "drizzle-orm/mysql2"
import 'dotenv/config'

export const db = drizzle(process.env.DATABASE_URL!);

export const getAll = async (table)=>{
    const response = await db.select().from(table);
    console.log("aaa")
    return response;
}