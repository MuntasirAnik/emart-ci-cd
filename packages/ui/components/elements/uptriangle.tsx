export const UpTriangle = ({
  size,
  leftPosition,
}: {
  size: number;
  leftPosition: number;
}) => {
  const borderStyle = ".5rem solid";

  return (
    <div
      style={{
        position: "absolute",
        top: "-0.2rem",
        left: `${leftPosition}rem`,
        width: `${size}rem`,
        height: `${size}rem`,
        transform: "rotate(45deg)",
        backgroundColor: "black",
        borderLeft: borderStyle,
        borderTop: borderStyle,
      }}
    ></div>
  );
};
