import Event from "../components/ui/event/event"
import events from "../contexts/events"

const index = () => {
    return (
        events.map((props,num) => {
            (num % 2 == 0) ? props.right = true : props.right = false
            props.id = num
            return <Event {...props}/>
        })
    )
}

export default index