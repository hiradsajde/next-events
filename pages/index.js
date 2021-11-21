import Event from "../components/ui/event/event"
import Events from "../contexts/events"
import { useContext } from "react"
const index = () => {
    const { data } = useContext(Events)
    return (
        data.map((props,num) => {
            (num % 2 == 0) ? props.right = true : props.right = false
            props.id = num
            return <Event {...props} key={num}/>
        })
    )
}

export default index