import { HEADER_NAVIGATION_HEIGHT } from "src/utils/constants";
import styled, { css } from "styled-components/native";

export const Container = styled.View<{ opacityBackground: boolean }>`
  ${({ opacityBackground }) => css`
    justify-content: center;
    align-items: center;
    height: ${HEADER_NAVIGATION_HEIGHT}px;
    border-bottom: 1px;
    border-bottom-width: 1px;
    border-bottom-color: ${!opacityBackground ? "white" : "transparent"};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  `}
`;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;
