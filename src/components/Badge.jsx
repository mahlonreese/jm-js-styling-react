import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    display: "inline-block",
    padding: "0.35em 0.65em",
    fontSize: "0.75em",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "0.375rem",
    background: "#ccc",
    color: "#000",
  },
  coloredBg: bgColor => ({
    background: bgColor,
  }),
  coloredFg: fgColor => ({
    color: fgColor,
  }),
});


export default function Badge({ children, bgColor, fgColor }) {
  return (
    <span
    {...stylex.props(styles.base, bgColor && styles.coloredBg(bgColor),
      fgColor && styles.coloredFg(fgColor)
    )}
    >
      {children}
    </span>
  );
}
