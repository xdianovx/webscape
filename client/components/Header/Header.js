import styles from './Header.module.scss'
import Link from "next/link";
import Image from 'next/image'


export const Header = () => {
    const nav = [
        {id: 1, href: '/portfolio', name: "Кейсы"},
        {id: 2, href: '/about', name: "О нас"},
        {id: 3, href: '/services', name: "Услуги"},
        {id: 4, href: '/blog', name: "Блог"},
        {id: 5, href: '/contacts', name: "Контакты"},
    ]

    return <>
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrap}>
                    <Link href="/">
                        <Image src="/logo.svg" width={185} height={28}/>
                    </Link>

                    <nav className={styles.nav}>
                        <ul>
                            {nav && nav.map(item => {
                                return <li key={item.id}><Link href={item.href}>{item.name}</Link></li>
                            })}
                        </ul>
                    </nav>

                    <div className={styles.callback}>
                        <a href="mailto:dianov.js@gmail.com">
                            <Image src="/header-mail.svg" width={24} height={24}/>
                        </a>

                        <a href="tel:79143493676" className={styles.phone}>
                            <Image src="/header-phone.svg" width={24} height={24}/>
                        </a>


                    </div>
                </div>
            </div>
        </header>
    </>
}