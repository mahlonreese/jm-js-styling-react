import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  attrList: {
    marginBlock: "0.5rem",
  },
  attrName: {
    fontWeight: 700,
  },
  attrVal: {
    fontWeight: 100,
    marginLeft: 0,
  },
});

export function AttributeList({ children }) {
  return (
    <dl {...stylex.props(styles.attrList)}>
      {children}
    </dl>
  );
}

export function Attribute({ name, value }) {
  return (
    <>
      <dt {...stylex.props(styles.attrName)}>{name}</dt>
      <dd {...stylex.props(styles.attrVal)}>{value}</dd>
    </>
  );
}
