import style from './../../../styles/components/detail.module.scss'

const Detail = (props) => {
    return (
        <div className={style.detail}>
            <h1 className={style.title}>{props.title}</h1>
            <div className={style.image}>
                <img src={props.image}/>
            </div>
            <p className={style.text}>{props.text}</p>
        </div>
    )
}

export default Detail