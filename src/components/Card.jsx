export default function Card({ image, name, price, rating, numberOfVotes, popular }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
        <p>{rating}</p>
        {numberOfVotes && <p>{numberOfVotes}</p>}
        {popular === true && <p>popular</p>}
      </div>
    </>
  )

}