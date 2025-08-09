import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined;
};

export const db  = globalThis.prisma ||  new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;

// async function main() {
//   // Create a profile
//   const profile = await prisma.profile.create({
//     data: {
//       userId: "user_123",
//       name: "Anand Singh",
//       imageUrl: "https://example.com/image.png",
//       email: "anand@example.com",
//     },
//   })

//   console.log("Profile created:", profile)
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect())
