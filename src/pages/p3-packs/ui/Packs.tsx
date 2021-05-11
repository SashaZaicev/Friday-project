import React from 'react'
import s from './table.module.css'

export const Packs = () => {
    return (
        <>
            Packs
            table
            <div className={s.table}>
                <div className={s.tableHeader}>
                    <div className={s.tableHeader_packsName}>Name</div>
                    <div className={s.tableHeader_price}>cardsCount</div>
                    <div className={s.tableHeader_price}>cardsCount</div>
                    <div className={s.tableHeader_buttonAdd}>
                        <button>add</button>
                    </div>
                </div>
                <div className={s.tableBody}>
                    <div className={s.tableBody_item}>
                        <div className={s.tableBody_item_name}>"name"</div>
                        <div className={s.tableBody_item_cardsCount}>"cardsCount"</div>
                        <div className={s.tableBody_item_updated}>"updated"</div>
                        <div className={s.tableBody_item_buttons}>
                            <button>del</button>
                            <button>update</button>
                            <a>cards</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}