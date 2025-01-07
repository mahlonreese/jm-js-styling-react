import * as stylex from "@stylexjs/stylex";
import { flexLayout } from "../styles/layout.stylex";

const styles = stylex.create({});

export default function FlavorText({ children }) {
  return (
    <blockquote {...stylex.props(styles.base, flexLayout.centerAll)}>
      {children}
    </blockquote>
  );
}
