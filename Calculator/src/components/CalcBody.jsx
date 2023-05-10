import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  background: '#111111',
  width: '22rem',
  padding: '3rem',
  marginTop: '4rem',
  borderRadius: '1rem',
  boxShadow: '0px 9px 15px -3px rgba(0,0,0,0.1)',
});

const Wrapper = ({ children }) => {
  return (
    <StyledBox className="calcBody">{children}</StyledBox>
  )
}

export default Wrapper