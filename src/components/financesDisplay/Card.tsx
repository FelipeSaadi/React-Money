import inIcon from "../../images/green-arrow.png"
import outIcon from "../../images/red-arrow.png"
import totalIcon from "../../images/dollar-sign.png"

import styles from "../../css/financesDisplay.module.css"
export default (props: any) => {
    return (
        <>
            {cardType(props.type, props.value)}
        </>
    )
}

let cardType = (type: String, value: number) => {
    const adjustValue = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value).replace(/^(\D+)/, '$ ');
    }
    if (type === "in") {
        return (
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.titleName}>In</div>
                    <div className={styles.titleIcon}>
                        <img src={inIcon} alt="" />
                    </div>
                </div>
                <div className={styles.value}>
                    {adjustValue(value)}
                </div>
            </div>
        )
    } else if (type === "out") {
        return (
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.titleName}>Out</div>
                    <div className={styles.titleIcon}>
                        <img src={outIcon} alt="" />
                    </div>
                </div>
                <div className={styles.value}>
                    {adjustValue(value)}
                </div>
            </div>
        )
    } else if (type === "total") {
        return (
            <div className={styles.card} id={styles.total}>
                <div className={styles.title}>
                    <div className={styles.titleName}>
                        Total
                    </div>
                    <div className={styles.titleIcon}>
                        <img src={totalIcon} alt="" />
                    </div>
                </div>
                <div className={styles.value}>
                    {value < 0 ? "- " : null}
                    {adjustValue(value)}
                </div>
            </div>
        )
    }
}