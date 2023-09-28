import { PrismaClient } from '@prisma/client';

// Define the database URL for development and production environments
const devDatabaseUrl = 'postgresql://myuser:password@localhost:5432/mydb?schema=public';
const prodDatabaseUrl = process.env.DATABASE_URL || 'default-production-url';

// Create a Prisma client instance
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.NODE_ENV === 'production' ? prodDatabaseUrl : devDatabaseUrl,
    },
  },
});
