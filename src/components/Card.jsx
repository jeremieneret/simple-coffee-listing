export default function Card({ image, name, price, rating, numberOfVotes, popular, available }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <div className="name-price-container">
          <p className="name">{name}</p>
          <p className="price">{price}</p>
        </div>
        {numberOfVotes > 0 ?
          <div className="information-container">
            <div className="rating-votes-container">
              <img src="/assets/Star_fill.svg" alt="Star" />
              {rating && <p className="rating">{rating}</p>}
              <p className="nb-of-votes">({numberOfVotes} votes)</p>
            </div>
              {available === false && <p className="sold-out">Sold out</p>}
          </div>
          :
          <img src="/assets/Star.svg" alt="Star" />
        }
        {popular === true && <p className="popular">popular</p>}
      </div>
    </>
  )

}