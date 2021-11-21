import Detail from "../../components/ui/event/detail"
import Events from "../../contexts/events"
import { useContext } from "react"
import {withRouter} from 'next/router'

const index = (props) => {
    const {id} = props.router.query
    // eslint-disable-next-line
    const {data} = useContext(Events)
    return (
        <>
            {id && <Detail
                title = {data[id].title}
                image = {data[id].image}
                text = {data[id].description}
            />}
        </>
    )
}

export default withRouter(index)