import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.exposition.createMany({
        data: [
            {
                gallery_name: "Barracuda",
                artwork: 1,
                artist: 1
            },
            {
                gallery_name: "ETRA",
                artwork: 2,
                artist: 1
            },
            {
                gallery_name: "Dandelion",
                artwork: 2,
                artist: 1
            }
        ]
    })
}

main()
    .then(() => {
        console.log("Registered!")
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });