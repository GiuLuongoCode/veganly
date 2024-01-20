function Card({ image, title }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={image} alt="Recipe Image" className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 ">
          <h3 className="font-bold text-xl text-blue-600">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
