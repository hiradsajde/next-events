import style from './../../../styles/components/menu.module.scss'
import Link from 'next/link'
const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.items}>
                <ul>
                    <Link href='/'><li>خانه</li></Link>
                </ul>
            </div>
            <div className={style.logo}>
                <Link href='/'><img src="/logo.png"/></Link>
            </div>
            <div className={style.button}>پنل کاربری</div>
        </div>
    )
}

export default Menu