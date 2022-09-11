import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 160px;
    height: 160px;
    border: 1px solid ${theme.colors?.translucent};
    border-radius: 5px;
    justify-content: space-evenly;
    align-items: center;
  `}
`;

export const Image = styled.Image`
  width: 110px;
  height: 110px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    letter-spacing: -0.01em;

    color: ${theme.colors?.primary};
  `}
`;
