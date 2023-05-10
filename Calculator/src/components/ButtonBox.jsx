import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const StyledGrid = styled(Grid)({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '.5rem',
});


const ButtonBox = ({ children }) => {
    return (

        <StyledGrid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="buttonBox"
        >{children}</StyledGrid>

    )
}

export default ButtonBox