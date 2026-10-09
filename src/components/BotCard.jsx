export default function BotCard ({ developer, thumbnail }){
    return (
        
        <article className ="botcard">
            <img src={thumbnail} alt="Albert Showcase" width={50}/>
            <h2>{developer}</h2>
        </article>
    
    )
} 