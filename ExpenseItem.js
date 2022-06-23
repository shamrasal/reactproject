import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails Title={props.Title} location={props.location} amount={props.amount}></ExpenseDetails>
        </div>
    );
}
export default ExpenseItem;


