import '../sass/Card.scss'
const Card = ({name, imagen}) => {
  return (
    <div className="card">
        <p className="card__name"> {name} </p>
        <div className="card__circle"></div>
        <img className="card__img" src={imagen}  alt="Imagen Pokemon"></img>

    </div>
  )
}

export {Card}