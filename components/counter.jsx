function Counter({quantity, handleCounterClick}) {
    return (
        <>
            <button className="btn quantity-btn" onClick={handleCounterClick}>-</button>
            <input
                className="quantity-selector"
                name="quantity"
                type="integer"
                value={quantity}
            ></input>
            <button className="btn quantity-btn" onClick={handleCounterClick}>+</button>
        </>
    )
}

export default Counter
