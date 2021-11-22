import style from './../../../styles/components/detail.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
const Detail = (props) => {
    //eslint-disable-next-line
    const likes = JSON.parse(localStorage.getItem('like')) ?? []
    const isLike = likes.find((x) => {
        return x == props.id
    }) ?? false
    const [like , SetLike] = useState(isLike ? true : false)
    const click = function(){
        SetLike(!like)
        if(!like == true){
            const res = [...likes , props.id]
            localStorage.setItem('like',JSON.stringify(res))
            console.log(res)
        } else {
            const res = likes.filter((x) => {
                return x !== props.id
            })
            localStorage.setItem('like',JSON.stringify(res))
            console.log(res)
        }
    }
    return (
        <div className={style.detail}>
            <h1 className={style.title}>{props.title}</h1>
            <div className={style.image}>
                <img src={props.image}/>
            </div>
            <p className={style.text}>{props.text}</p>
            <div className={style.bottom}>
                <div className={style.like} onClick={click}>{like ? (
                    <FontAwesomeIcon icon={faHeart} />
                ) : (
                    <FontAwesomeIcon icon={farHeart}/>
                )}</div>
            </div>
        </div>
    )
}

export default Detail