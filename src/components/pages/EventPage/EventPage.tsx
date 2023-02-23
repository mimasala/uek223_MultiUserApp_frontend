import { Box, Container, Grid } from "@mui/material";
import EventCard from "../../molecules/EventCard/EventCard";
import { useStyles } from "./Event.style";

const EventPage = () => {
    const eventStyles = useStyles();
    return(
        <Container fixed >
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh', textAlign: 'center',  overflow: 'auto'}} >
            <h1 >Available Events</h1>
            <Container maxWidth="md" >
            <Grid container spacing={10} sx={{ bgcolor: '#cfe8fc', marginTop:"10%", marginBottom: "10%"}}>
                    <Grid item xs={6}>
                    <EventCard />
                    </Grid>
                    <Grid item xs={6}>
                    <EventCard/>
                    </Grid>
                    <Grid item xs={6}>
                    <EventCard />
                    </Grid>
                    <Grid item xs={6}>
                    <EventCard/>
                    </Grid>
                    <Grid item xs={6}>
                    <EventCard />
                    </Grid>
                    <Grid item xs={6}>
                    <EventCard/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
      </Container>
);
};
export default EventPage;
