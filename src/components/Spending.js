import styled from "styled-components";
import {FlexRow} from "./styles/FlexRow";
import ChartItem from "./ChartItem";
import { FlexColumn } from "./styles/FlexColumn";

const SpendingCard = styled.div`
    height: 60vh;
    background-color: white;
    border-radius: 10px;
    margin-top: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 900px){
        padding: 1rem 2rem;
    }

    @media (min-width: 1440px){
        height: 60vh;
    }
`

const Spending = ({days}) => {
    return (
        <SpendingCard>
           <h3>Spending - Last 7 days</h3>
           <FlexRow>
                {
                    days.map(day => (
                        <ChartItem key={day.day} day={day} />
                    ))
                }
           </FlexRow>
           <hr></hr>
           <FlexRow>
                <FlexColumn>
                    <p>Total this month</p>
                    <h1>$478.33</h1>
                </FlexColumn>
                <FlexColumn>
                    <span>+2.4%</span>
                    <p>from last month</p>
                </FlexColumn>
           </FlexRow>
        </SpendingCard>
    )
}

export default Spending;