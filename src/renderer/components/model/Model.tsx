import React from 'react';

import { motion } from "motion/react"
import styles from "./styles.module.scss"
import { ArrowBigDown } from 'lucide-react';

function ModelSelectionDropDown()
{
    return (
        <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownHeader}>
                    <div className={styles.dropdownTitle}>Model</div>
                    <div className={styles.dropdownIcon}><ArrowBigDown/></div>
                </div>
            </div>
        </div>
    )
}

export default ModelSelectionDropDown