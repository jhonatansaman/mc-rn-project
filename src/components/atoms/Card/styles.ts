import styled from "styled-components/native";

export const Container = styled.View`
  width: 160px;
  height: 160px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Description = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;
