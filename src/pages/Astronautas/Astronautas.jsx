import React from 'react';
import logo from './img/logo.webp';
import style from './css/Astronautas.module.css';

export const Astronautas = () => (

<body>
    <header className={style.container}>
        <img className={style.logo} src={logo} alt="Logo" />
        <nav className={style.mainNav}>
            <a className={style.navLink + ' active'} href="/">About</a>
            <a className={style.navLink} href="/">Portfolio</a>
            <a className={style.navLink} href="/">Job</a>
            <a className={style.navLink} href="/">Contact</a>
        </nav>
    </header>

    <main className={style.container}>
        <div className={style.columnLeft}>
            <h1 className={style.mainTitle}><span>404</span>Lost in space</h1>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate a alias omnis pariatur tempore necessitatibus suscipit voluptatem modi! Ipsam.</p>
            <div className={style.btnList}>
                <a className={style.btn} href="/">Go home</a>
                <a className={style.btn +' btnWhite'} href="/">Back</a>
            </div>
        </div>
        <div className={style.columnRight}>
            <img className={style.mainImg} src="./img/astronautas.png" alt="Astronautas raso zinute namo, nes isskrydo i kosmosa" />
        </div>
    </main>

    <footer className={style.container}>
        <div className={style.socials}>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + ' fa faFacebookSquare'} aria-hidden="true"></i>
            </a>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + ' fa faTwitter'} aria-hidden="true"></i>
            </a>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + ' fa faInstagram'} aria-hidden="true"></i>
            </a>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + 'fa faLinkedinSquare'} aria-hidden="true"></i>
            </a>
        </div>
        
        <p className={style.copyrightText}>&copy; 2024 - All rights reserved</p>
    </footer>
</body>

    );

