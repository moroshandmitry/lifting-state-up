export const Button = ({ children, onClickFromBtn, btnClass }) => {
  return (
    <button type="button" className={btnClass} onClick={onClickFromBtn}>
      {children}
    </button>
  );
};
