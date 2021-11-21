import Detail from "../../components/ui/event/detail"
import events from "../../contexts/events"
import {withRouter} from 'next/router'

const index = (props) => {
    const {id} = props.router.query
    return (
        <>
            {id && <Detail
                title = {events[id].title}
                image = {events[id].image}
                text = {events[id].description}
            />}
        </>
    )
}

export default withRouter(index)