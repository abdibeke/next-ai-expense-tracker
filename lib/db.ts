// -------------------------------
// Prisma Client Setup
// -------------------------------

import { PrismaClient } from "@prisma/client";

// Extend globalThis to include a PrismaClient instance
// This helps avoid creating multiple instances during development (hot reloads)
declare global {
    var prisma: PrismaClient | undefined;
}

// Use existing PrismaClient if available, otherwise create a new one
export const db =
    globalThis.prisma ||
    new PrismaClient();

// During development, attach the PrismaClient to globalThis
// Prevents multiple instances when code reloads (e.g., Next.js dev mode)
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}
