const Poster = ({item}) => {
    return (
        <div className="card mb-3  col-3 p-0">
            <img src={item.images["Poster Art"].url} className="card-img-top" alt={item.title}/>
            <div className="card-body text-center">
                {item.title}
            </div>
        </div>
    )
}

export default Poster;