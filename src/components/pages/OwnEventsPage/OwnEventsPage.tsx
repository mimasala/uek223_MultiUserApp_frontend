import { Box, Button, Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ActiveUserContext from "../../../Contexts/ActiveUserContext";
import EventService from "../../../Services/EventService";
import { EventModel } from "../../../types/models/Event.model";
import EditEventCard from "../../molecules/EventCard/EditEventCard";
import NewEventCard from "../../molecules/EventCard/NewEventCard";
import { useStyles } from "./OwnEvent.style";

const OwnEventsPage = () => {
    const eventStyles = useStyles();
    const context = useContext(ActiveUserContext);
    const [events, setEvents] = useState<EventModel[]>([]);
    
    useEffect(() => {
          return () => {
              EventService.getOwnEvents(context.user!.id).then((res) => {
                setEvents(res);
              });
          };
      }, []);
  

    // event creation cards
    return(
        <Container fixed >
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh', textAlign: 'center',  overflow: 'auto'}} >
            <h1>Created Events</h1>
            <Button variant="outlined">New</Button>
            <Container maxWidth="md" >
            <Grid container spacing={10} sx={{ bgcolor: '#cfe8fc', marginTop:"5%", marginBottom: "10%"}}>
                {events.map((event: EventModel) => {
                    return(                   
                      <Grid item xs={6}>
                        <EditEventCard {...event}/>
                      </Grid>
                    ); 
                  })}
                <NewEventCard/>
            </Grid>
            </Container>
        </Box>
      </Container>
);
};
export default OwnEventsPage;
