import styles from "./Item.module.css";

function Item({ data }) {
  return (
    <div className={styles.Con}>
      <div className={styles.img}>
        <img src={data.img} alt="" />
      </div>
      <div>
        <div className={styles.left}></div>
        <div className={styles.mid}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
export { Item };
