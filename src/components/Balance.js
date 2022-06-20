import {FlexColumn} from "../components/styles/FlexColumn";
import {FlexRow} from "../components/styles/FlexRow";
import Icon from "../images/logo.svg";
import styled from "styled-components";

const BalanceCard = styled.div`
    width: 40vw;
    background-color: var(--soft-red);
    color: var(--cream);
    padding: 0em 2em;
    border-radius: 1em;
`

const Balance = () => {
    return (
        <BalanceCard>
            <FlexRow>
                <div>
                    <p>My balance</p>
                    <h2>$921.48</h2>
                </div>
                <img src={Icon} />
            </FlexRow>
        </BalanceCard>
    )
}

export default Balance;
