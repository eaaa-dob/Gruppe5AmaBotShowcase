export default function BotCard ({ developer, thumbnail }){
    return (
        <article className ="botcard">
            <div className="thumbnail-container">
                <img src={thumbnail} alt="Albert Showcase"/>
            </div>
            <h2>{developer}</h2>
        </article>
    
    )
} 