import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { url } from "inspector";
import { redirect } from "next/navigation";

const NewCompanions = async () => {
const {userId} = await auth();
if(!userId) redirect( '/sign-in' );

    return(
        <main className="min-lg:2-1/3 ">
            <article className="w-full gap-4 flex flex-col">
            <h1> Companion Builder</h1>
                <CompanionForm/>
            </article>
        </main>
    )
}

export default NewCompanions;