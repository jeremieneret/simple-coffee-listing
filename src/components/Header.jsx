export default function Header({ title, description, buttonText1, buttonText2, activeButton, setActiveButton }) {
  return (
    <div className="header">
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <button
        className={activeButton === "all" ? "active" : ""}
        onClick={() => setActiveButton("all")}
      >
        {buttonText1}
      </button>
      <button
        className={activeButton === "available" ? "active" : ""}
        onClick={() => setActiveButton("available")}
      >
        {buttonText2}
      </button>
    </div>
  );
}
