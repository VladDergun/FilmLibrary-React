import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.left}></div>
        <div className={css.center}>Film library</div>
        <div className={css.right}>Created by Vladyslav Derhun</div>
      </div>
    </footer>
  );
};
