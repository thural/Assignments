import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
    height: '3rem',
    marginBottom: '4rem',
    color: 'white',
    fontSize: '3rem',
});

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return (
        <StyledBox className="screen">
            <div id="temporal" className="screen" >{calc.num ? calc.num : calc.res}</div>
            <div id="current"></div>
        </StyledBox>
    )
}

export default Screen