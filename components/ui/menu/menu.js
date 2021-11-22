import style from './../../../styles/components/menu.module.scss'
import Link from 'next/link'
const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <Link href='/'><img src="/logo.png"/></Link>
            </div>
            <Link href="/favorites"><div className={style.button}>علاقه مندی ها</div></Link>
        </div>
    )
}

export default Menu