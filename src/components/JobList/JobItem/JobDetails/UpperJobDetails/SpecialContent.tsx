import { css, cx } from "@emotion/css";
import { SpecialContentProps } from "../../../../../data/dataTypes";

export default function SpecialContent({ content, backgroundColor }: SpecialContentProps) {
  const specialContentColor = css`
    background-color: ${backgroundColor};
  `;

  return (
    <div className={cx(specialContent, specialContentColor)}>
      <p>{content}</p>
    </div>
  );
}

const specialContent = css`
  width: fit-content;
  height: 1.6em;
  padding: 0 0.7em;
  border-radius: 1em;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  p {
    margin-top: 1.2em;
  }
`;
