import CompanionForm from "@/components/CompanionForm";

const NewCompanions = () => {
    return(
        <main className="min-lg:2-1/3 mind-md:w-2">
            <article className="w-full gap-4 flex flex-col">
                <h1> Companion Builder</h1>
            <CompanionForm/>
            </article>
        </main>
    )
}

export default NewCompanions;