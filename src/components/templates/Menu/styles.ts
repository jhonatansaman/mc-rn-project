import styled, { css } from "styled-components/native";

export const Container = styled.View<{ opacityBackground: boolean }>`
  ${({ opacityBackground, theme }) => css`
    background-color: ${opacityBackground
      ? "rgba(0, 0, 0, 0.3)"
      : theme.colors.secondary};
    flex: 1;
  `}
`;

export const Content = styled.ScrollView``;
