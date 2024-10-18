import styled from "styled-components";

export const SpecialContentDiv = styled.div<{ $background?: string }>`
  background-color: ${(props) => props.$background};
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
