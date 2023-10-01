"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("@prisma/client");
var globalForPrisma = globalThis;
exports.prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : new client_1.PrismaClient();
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = exports.prisma;
if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not defined in your environment.');
    process.exit(1); // Exit the application with an error code
}
console.log('DATABASE_URL:', process.env.DATABASE_URL);
