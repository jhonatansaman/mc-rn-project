import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 30px;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 213px;
`;

export const Title = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const Price = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const Description = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const PriceBox = styled.View`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid #000000;
`;

export const ButtonBox = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
`;

export const ButtonText = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
