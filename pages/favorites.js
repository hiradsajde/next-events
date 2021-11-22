import { useContext , useState , useEffect} from 'react'
import Events from './../contexts/events'
import Event from '../components/ui/event/event'

const favorites = () => {
    // eslint-disable-next-line
    const { data } = useContext(Events)
    // eslint-disable-next-line
    const [width , SetWidth] = useState('')
    // eslint-disable-next-line
    const [likes , SetLikes] = useState('')
    // eslint-disable-next-line
    useEffect(() => {
        SetWidth(window.innerWidth)
        SetLikes(localStorage.getItem("like"))
    })
    const res = data.filter((value,i) => {
        return likes.includes(value.id)
    })
    if(res.length > 0){
        return res.map((props,num) => {
            if(width > 1680){
                (num % 2 == 0) ? props.right = true : props.right = false
            }
            else{
                props.right = false
            }
            return <Event {...props} key={num}/>
        })
    } else {
        return (
            <h1 className="title">شما موردی را لایک نکرده اید</h1>
        )
    }
}

export default favorites