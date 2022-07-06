import classes from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={`section small-section shaded-section ${classes.welcome}`}>
      <div className={classes.mainHeader}>
        <h1>Sures AI</h1>
        <p>Your gate to a super quality</p>
      </div>
    </div>
  );
}
