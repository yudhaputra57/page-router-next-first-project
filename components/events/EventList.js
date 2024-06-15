import { EventItem } from "./EventItem";
import classes from './EventList.module.css'

export function EventList(props){
    const {items} = props;
    return(
        <ul className={classes.list}>
            {items.map(event =>
                <EventItem 
                    key={event.id}
                    id={event.id} 
                    date={event.date}
                    image={event.image}
                    location={event.location}
                    title={event.title}
                />
            )}
        </ul>
    )
}