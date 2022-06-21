import {FlexColumn} from "../components/styles/FlexColumn";
import Icon from "../images/logo.svg";
import styled from "styled-components";

const BalanceCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--soft-red);
    color: var(--cream);
    border-radius: 10px;
    height: 12vh;
    padding: 0em 1.25em;

    @media (min-width: 1440px){
        padding: 0em 2em;
        height: 10vh;
    }
`

const Balance = () => {
    return (
        <BalanceCard>
            <FlexColumn>
                <h4>My balance</h4>
                <h2>$921.48</h2>
            </FlexColumn>
            <img src={Icon} alt="Logo" />
        </BalanceCard>
    )
}

export default Balance;
