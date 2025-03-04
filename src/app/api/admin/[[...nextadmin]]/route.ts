import { createHandler } from "@premieroctet/next-admin/appHandler";
import {prisma} from "@/lib/prisma";

const { run } = createHandler({
    apiBasePath: "/api/admin",
    prisma,
    /*options*/
});

export { run as DELETE, run as GET, run as POST };