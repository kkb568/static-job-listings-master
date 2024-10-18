import { SpecialContentProps } from "../../../../../data/dataTypes";
import { SpecialContentDiv } from "../../../../../styles/styles";

export default function SpecialContent({ content, backgroundColor }: SpecialContentProps) {
  return (
    <SpecialContentDiv $background={backgroundColor}>
      <p>{content}</p>
    </SpecialContentDiv>
  );
}
