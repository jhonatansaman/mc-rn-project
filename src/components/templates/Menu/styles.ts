import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors?.secondary};
    flex: 1;
  `}
`;

export const Content = styled.ScrollView``;
