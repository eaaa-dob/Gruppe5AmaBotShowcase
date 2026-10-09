import { useLoaderData } from "react-router";

import { data } from "../../public/data.js";

export async function clientLoader ({ params }) {
    const targetId = Number(params.id)
    const selectedBot = data.find((bot) => bot.id === targetId );
    await new Promise((resolve) => setTimeout(resolve, 500));
    return selectedBot;
}

export function IndividualProject.jsx(){

const bot = useLoaderData();

if (!bot){
    return <h2>AMA bot er ikke fundet! Tjek linket eller rapporter fejlen</h2>
}

return (
<>
<section className="Botdetail">
    <section className="Højre">

    </section>



    <section className="Venstre">

    </section>
</section>
</>
)
}