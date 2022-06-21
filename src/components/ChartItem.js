import styled from "styled-components";
import { FlexColumn } from "./styles/FlexColumn";

const Chart = styled.div`
    width: 9vw;
    height: 20vh;
    border-radius: 5px;
    background-color: var(--soft-red);

    @media (min-width: 1440px){
        width: 5vw;
    }
`

const ChartItem = ({day}) => {
    return (
        <FlexColumn>
            <Chart />
            <p className="day">{day.day}</p>
        </FlexColumn>
    )
}

export default ChartItem;