import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const loggedUser = await db.user.findUnique({ where: { clerkUserId: user.id } });

        if (!loggedUser) {
            const newUser = await db.user.create({
                data: {
                    clerkUserId: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    name: user.fullName,
                    imageUrl: user.imageUrl,
                },
            });

            return newUser;
        }

        return loggedUser;
    } catch (error) {
        console.error(error.message);
    }
};
