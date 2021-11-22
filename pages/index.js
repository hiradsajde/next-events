import Event from "../components/ui/event/event"
import Events from "../contexts/events"
import { useContext , useEffect , useState} from "react"
const index = () => {
    // eslint-disable-next-line
    const { data } = useContext(Events)
    // eslint-disable-next-line
    const [width , SetWidth] = useState('')
    // eslint-disable-next-line
    useEffect(() => {
        SetWidth(window.innerWidth)
    })
    return (
        data.map((props,num) => {
            if(width > 1680){
                (num % 2 == 0) ? props.right = true : props.right = false
            }
            else{
                props.right = false
            }
            return <Event {...props} key={num}/>
        })
    )
}

export default index