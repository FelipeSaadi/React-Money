import styles from "../../css/home.module.css"
export default (props: any) => {
    const adjustValue = (value = props.price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value).replace(/^(\D+)/, '$ ');
    }
    return (
        <>
            <div className={styles.tableRow}>
                <div className={styles.rowText}>{props.title}</div>
                <div className={props.price > 0 ? styles.entry : styles.out}>{props.price < 0 ? "-" : null} {adjustValue()}</div>
                <div className={styles.rowText}>{props.category}</div>
                <div className={styles.rowText}>{props.date}</div>
            </div>
        </>
    )
}