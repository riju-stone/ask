import React from 'react'

import styles from "./styles.module.scss"

function ButtonComponent({ logo, click }: { logo: React.ReactNode, click: React.MouseEventHandler }) {
    return (
        <button className={styles.customButton} onClick={click}>{logo}</button>
    )
}

export default ButtonComponent
