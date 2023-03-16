export default function MovieCard({title, img, year}){
    return(
        <article className="movie-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>Utgivelsesår: <span>{year}</span></p>
            
        </article>
    )
}