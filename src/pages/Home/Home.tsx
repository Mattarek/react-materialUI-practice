import cities from '../../data.json';
import { Container, Grid, Typography } from '@mui/material';
import { Card } from '../../components/Card';

export const Home = () => {
    return (
        <Container>
            {cities.map((city) => {
                return (
                    <>
                        <Typography
                            variant='h4'
                            component='h2'
                            marginBottom={3}
                            marginTop={5}>
                            Top {city.name} Tours
                        </Typography>
                        <Grid
                            container
                            spacing={5}>
                            {city.tours.map((tour) => {
                                return (
                                    <Card
                                        tour={tour}
                                        key={tour.id}
                                    />
                                );
                            })}
                        </Grid>
                    </>
                );
            })}
        </Container>
    );
};
