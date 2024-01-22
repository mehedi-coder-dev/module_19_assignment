export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green"}}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick,prev } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green",left:prev }}
      onClick={onClick}
    />
  );
}