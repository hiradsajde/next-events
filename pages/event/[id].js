import Detail from "../../components/ui/event/detail"
import events from "../../contexts/events"
import {useRouter} from 'next/router'

const index = () => {
    const router = useRouter()
    const {id} = router.query
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

export default index