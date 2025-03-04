import {NextAdmin, PromisePageProps,} from "@premieroctet/next-admin";
import {getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import {prisma} from "@/lib/prisma";

export default async function AdminPage({
                                            params,
                                            searchParams,
                                        }: PromisePageProps) { // or PromisePageProps for Next 15+
    // await params
    // await searchParams
    // await basePath
    const searchParamss = await searchParams
    if(!searchParamss){
        return null
    }

    const rawParams = await params
    if(!rawParams){
        return null
    }
    const props = await getNextAdminProps({
        params: rawParams.nextadmin,
        searchParams:searchParamss,
        basePath: "/admin",
        apiBasePath: "/api/admin",
        prisma,
        /*options*/
    });

    return <><NextAdmin {...props}/></>;
}