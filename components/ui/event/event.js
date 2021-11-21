import style from './../../../styles/components/event.module.scss'
import Link from 'next/link'

const Event = (props) => {
    return (
        <div className={`${style.event} ${props.right ? '' : style.rtl}`}>
            {
                props.right == false &&
                <Link href={{
                    pathname : "event/[id]",
                    query : {
                        id : props.id
                    }
                }}>
                    <div className={`${style.rImage} ${style.image}`}>
                        <img src={props.image}/>
                    </div>
                </Link>
            }
            <div className={style.text}>
                <Link href={{
                    pathname : "event/[id]",
                    query : {
                        id : props.id
                    }
                }}>
                    <h1 className={style.title}>{props.title}</h1>
                </Link>
                <p className={style.description}>{props.description}</p>
                <div className={style.time}>
                    <Link href={{
                        pathname : "event/[id]",
                        query : {
                            id : props.id
                        }
                    }}>
                        <div className={style.button}>
                            اطلاعات بیشتر
                        </div>
                    </Link>
                </div>
            </div>
            {
                props.right &&
                <Link href={{
                    pathname : "event/[id]",
                    query : {
                        id : props.id
                    }
                }}>
                    <div className={style.image}>
                        <img src={props.image}/>
                    </div>
                </Link>
            }
        </div>
    )
}

export default Event