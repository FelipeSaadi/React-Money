import styles from "../../css/home.module.css"
export default () => {
    return (
        <div className={styles.tableHeader}>
            <div className={styles.headingText}>Title</div>
            <div className={styles.headingText}>Price</div>
            <div className={styles.headingText}>Category</div>
            <div className={styles.headingText}>Date</div>
        </div>
    )
}