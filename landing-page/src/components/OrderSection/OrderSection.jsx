import styles from "./OrderSection.module.css";
import { toast } from "react-hot-toast";

const increment = (event) => {
  if (event.target.parentElement.parentElement.input.value < 10) {
    event.target.parentElement.parentElement.input.value++;
  } else {
    return;
  }
};

const decrement = (event) => {
  if (event.target.parentElement.parentElement.input.value > 0) {
    event.target.parentElement.parentElement.input.value--;
  } else {
    return;
  }
};

const submitHandler = (event) => {
  event.preventDefault();
  if (event.target.input.value > 0 && event.target.input.value < 11) {
    event.target.reset();
    toast.success("Form submitted");
  } else if (event.target.input.value > 10) {
    toast.error("You cannot order more than 10 items");
    return;
  } else if (event.target.input.value < 1) {
    toast.error("You cannot order less than 1 item");
    return;
  }
};

const OrderSection = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Get your headphones:</h3>
      <form onSubmit={submitHandler} className={styles.inner_wrapper}>
        <div className={styles.amount_wrapper}>
          <button onClick={decrement} type="button" className={styles.button}>
            -
          </button>
          <input
            id="input"
            name="input"
            step={1}
            max={10}
            min={0}
            type="number"
            placeholder="0"
            className={styles.value}
          />
          <button onClick={increment} type="button" className={styles.button}>
            +
          </button>
        </div>
        <button className={styles.button_order}>Order</button>
      </form>
    </div>
  );
};

export default OrderSection;
