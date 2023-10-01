import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not defined in your environment.');
  process.exit(1); // Exit the application with an error code
}

console.log('DATABASE_URL:', process.env.DATABASE_URL);
