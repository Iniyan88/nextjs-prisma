import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  global.prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
}

export default global.prisma;
