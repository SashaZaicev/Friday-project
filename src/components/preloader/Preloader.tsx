import React from 'react'
import s from './preloader.module.css'
import preloader from './loader.gif'


const Preloader = () => {

    return (
        <div className={s.preloader}>
            <img src={preloader} className={s.img} alt={'preloader'}/>
        </div>
    )
}

export default Preloader