import { useRouter } from "next/router"
import {getEventById} from '../../dummy-data'
import {Fragment} from 'react'

export default function EventDetailPage(props){
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event){
        return <p>No event found</p>
    }

    return(
        <Fragment></Fragment>
    )
}