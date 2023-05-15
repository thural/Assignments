import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
    gridColumn: '2 / 3',
    width: '100%',
    padding: '0',
    alignSelf: 'center',
    justifySelf: 'center',
    margin: 'auto 0',
    '& h1': {
        textAlign: 'center'
    }
});


const Header = () => {
    return (

        <StyledBox>
            <h1>My Simple Todo App</h1>
        </StyledBox>

    );
};

export default Header;