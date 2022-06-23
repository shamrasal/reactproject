function ExpenseDetails(props) {
    return (
        <div className="expense-item__description">
            <h2>Description : {props.Title}</h2>
            <h2>Location : {props.location}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    )
}
export default ExpenseDetails