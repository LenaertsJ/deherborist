function Counter({quantity, handleCounterClick}) {
    return (
        <div className="quantity">
            <button className="btn quantity-btn" onClick={handleCounterClick}>-</button>
            <input
                className="quantity-selector"
                name="quantity"
                type="integer"
                value={quantity}
            ></input>
            <button className="btn quantity-btn" onClick={handleCounterClick}>+</button>
        </div>
    )
}

export default Counter
