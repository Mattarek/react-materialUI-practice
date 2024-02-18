import { AccessTime } from '@mui/icons-material';
import {
    createTheme,
    Grid,
    Paper,
    Rating,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';

interface Tour {
    id: number;
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
}

interface TourProps {
    tour: Tour;
}

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body1',
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});

export const Card = ({
    tour: { image, name, duration, rating, numberOfReviews, price },
}: TourProps) => {
    return (
        <Grid
            item
            xs={4}
            md={3}>
            <ThemeProvider theme={theme}>
                <Paper
                    elevation={3}
                    className='paper'>
                    <img
                        src={image}
                        alt='Img from tour'
                        className='img'
                    />
                    <Box sx={{ paddingX: 1 }}>
                        <Typography
                            variant='subtitle1'
                            component='h2'>
                            {name}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <AccessTime style={{ width: 12.5 }} />
                            <Typography
                                variant='body2'
                                component='p'
                                marginLeft={0.5}>
                                {duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            marginTop={3}>
                            <Rating
                                name='size-small'
                                size='small'
                                defaultValue={rating}
                                precision={0.25}
                                readOnly
                            />
                            <Typography
                                variant='body2'
                                component='p'
                                marginLeft={0.5}>
                                {rating}
                            </Typography>
                            <Typography
                                variant='body2'
                                component='p'
                                marginLeft={1.5}>
                                ({numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                            }}>
                            <Typography
                                variant='h6'
                                component='h2'
                                marginTop={0}>
                                From C ${price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};
