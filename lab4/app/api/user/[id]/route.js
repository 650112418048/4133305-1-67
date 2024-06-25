import { PrismaClient } from "@prisma/client";
import { useServerInsertedHTML } from "next/navigation";

const prisma = new PrismaClient()


export async function GET(req, ) {
    const userId = params.id;

    const allUsers = await prisma.user.findUnique(
        where:{
            id: userId,
        };
});
    return Response.json(allUsers);
}