import styles from './CustomButton.module.css'
const CustomButton=(props)=>(
    <button onClick={props.onClick} disabled={props.disabled} className={styles.customButton}>{props.children}</button>
)

export default CustomButton