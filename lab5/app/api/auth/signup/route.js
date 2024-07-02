import { Prisma } from "@prisma/client";
import { hash, hashSync } from "bcrypt";

export async function POST(req){
    const [email, password, name] = await req.json();
    //const hashedPassword = hash(password,10);
    const hashedPassword = hashSync(password,10);

    const newUser = await Prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        },
    });


    return Response.json({
        data: {
            msg:"User Create !!",
            newUser,
        });
    } catch (err) {
      return Response.json(err,{ status: 500 });
    }
}