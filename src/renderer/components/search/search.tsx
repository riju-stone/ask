import { useRef } from "react"
import styles from "./styles.module.scss"

import { SendHorizonal, File, Brain, Image, Shield, Earth } from "lucide-react"

function SearchComponent()
{
    const searchContainer = useRef(null)

    return (
        <div ref={searchContainer} className={styles.searchWrapper}>
            <div className={styles.searchContainer}>            <div className={styles.searchInputContainer}>
                <textarea placeholder="Ask Anything..." className={styles.searchInput} />
            </div>
                <div className={styles.searchActionContainer}>
                    <div>
                        <button className={styles.searchButton}><Shield /></button>
                        <button className={styles.searchButton}><Earth /></button>
                        <button className={styles.searchButton}><Brain /></button>
                        <button className={styles.searchButton}><File /></button>
                        <button className={styles.searchButton}><Image /></button>
                    </div>
                    <button className={styles.searchButton}><SendHorizonal /></button>
                </div>
            </div>

        </div>
    )
}

export default SearchComponent