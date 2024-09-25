import classNames from "classnames";


const Card = ({ className, children }) => {
  return (
    <div
      className={classNames("bg-gradientCard bg-origin-border border-transparent rounded-lg backdrop-blur-3xl", className)}
      style={{ backgroundClip: "padding-box, border-box" }}
    >
      <div className="bg-gradientLight rounded-md">{children}</div>
    </div>
  );
};



export default Card;