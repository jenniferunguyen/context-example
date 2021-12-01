/* TODO: style me! */
export default function ItemCard({ name, img, stock, price, add }) {
    return (
    <article className="card">
        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>
        <div className="content">
            <h2 className="plant-name">{name}</h2>
            <p className="price">${price}</p>
            <p className="stock">{stock} left in stock</p> 
            {/* TODO disable button if item is out of stock */}
            <button onClick={() => stock <= 0 ? 'disabled': add(name, price)} >Add to Cart</button>
        </div>
        <style jsx>{`
        .card .content button:hover {
            background-color: green;
        }
        `}</style>
    </article>)
}