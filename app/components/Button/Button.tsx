import styles from "./Button.module.css"
interface Props {
  text: string
}
const Button = (props: Props) => {
  return(
    <div className={styles.fruitBuyNow}>
      <span className={styles.buyNowText}>{props.text}</span>
    </div>
  )
}
export default Button