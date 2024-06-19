import { useRouter } from "next/router";
import { EventList } from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data"
import {Fragment} from 'react';

export default function EventsPage(){
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }

    return(
        <>
            <Fragment>
                <EventsSearch onSearch={findEventsHandler}/>
                <EventList items={events} />
            </Fragment>
        </>
    )
}