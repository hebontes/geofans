import {NextAdmin, PageProps, PromisePageProps} from "@premieroctet/next-admin";
import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import {prisma} from "@/lib/prisma"; // .css file containing tailiwnd rules

export default async function AdminPage({
                                            params,
                                            searchParams,
                                        }: PromisePageProps) {
    // In Next 15, these are asynchronous.
    // So you must call them as functions and await the result:
    const rawParams = await params;
    const rawSearchParams = await searchParams;

    // Destructure your route parameters
    const { nextadmin } = rawParams;

    // Now you can safely pass them to getNextAdminProps
    const props = await getNextAdminProps({
        params: nextadmin,
        searchParams: rawSearchParams,
        basePath: "/admin",
        apiBasePath: "/api/admin",
        prisma,

        /*options*/

    });

    return <NextAdmin {...props}/>;
}