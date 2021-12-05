import styled from "styled-components";

type AppProps = {
  message: string;
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Test({ message }: AppProps): JSX.Element {
  return (
    <div className="ConnectButton">
      <Title>{message}</Title>
    </div>
  );
}

export default Test;
