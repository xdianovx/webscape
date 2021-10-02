import Image from 'next/image'

import styles from './Hero.module.scss'
import cn from 'classnames'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Разработка сайтов и интернет-магазинов </h1>
                        <div className={styles.text}>
                            <p>Мы разрабатываем современные <span>web-сайты</span> и порталы </p>
                            <p>Берем на себя <span>продвижение</span> и техническую поддержку</p>
                            <p> Создаем <span>фирменный стиль</span></p>
                            <p>Решаем <span>задачи бизнеса</span> в интернете</p>
                        </div>

                        <button className={cn('btn', 'btn-blue', styles.btn)}>Обсудить проект</button>
                    </div>

                    <div className={styles.media}>
                        <Image className={styles.laptop} src="/macbook.png" width={714} height={473} layout="intrinsic" />
                        <div className={styles.iphone}>
                        <Image  src="/iphone.png" width={182} height={373}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}