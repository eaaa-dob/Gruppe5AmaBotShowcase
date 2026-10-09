import { useLoaderData } from "react-router";

import { data } from "../../public/data.js";

export async function clientLoader ({ params }) {
    const targetId = Number(params.id)
    const selectedBot = data.find((bot) => bot.id === targetId );
    await new Promise((resolve) => setTimeout(resolve, 500));
    return selectedBot;
}

export function IndividualProject(){

const bot = useLoaderData();

if (!bot){
    return <h2>AMA bot er ikke fundet! Tjek linket eller rapporter fejlen</h2>
}

return (
<>
<section className="Botdetail">
    <section className="Højre">

        <div className="imageCon">
        <img src="{bot.image.1}" alt="" />
        <img src="{bot.image.2}" alt="" />
        </div>


    </section>



    <section className="Venstre">



    </section>
</section>
</>
)
}