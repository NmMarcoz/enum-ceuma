import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const {DATABASE_URL} = process.env
console.log(DATABASE_URL)
export default defineConfig({
  out: './drizzle',
  schema: './src/infra/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: DATABASE_URL!,
  },

});

