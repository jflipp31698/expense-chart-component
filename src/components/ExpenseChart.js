import styled from "styled-components";
import Balance from "./Balance";
import Spending from "./Spending";

const Expense = styled.div`
    height: 100%;
    width: 95vw;
    
    @media (min-width: 1440px){
        width: 50vw;
    }
`

const ExpenseChart = ({days}) => {
    return(
        <Expense>
            <Balance />
            <Spending days={days}/>
        </Expense>
    )
}

export default ExpenseChart;