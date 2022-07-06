import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.PageHeader}>
      <div className={classes.logo}>
        {/* <img src = "" alt = "Sures.Ai logo"></img> */}
        <p className={classes.logo_text}>Sures AI</p>
      </div>
    </div>
  );
}
