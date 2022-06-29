import { useState } from "react"
import styles from "../../css/financesDisplay.module.css"
import Card from "./Card"
export default (props: any) => {
    return (
        <>
            <div className={styles.display}>
                <div className={styles.container}>
                    <Card type="in" value={props.entry} />
                    <Card type="out" value={props.out} />
                    <Card type="total" value={props.total} />
                </div>
            </div>
        </>
    )
}