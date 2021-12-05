import styled from "styled-components";

interface ConnectButtonProps {
  message: string;
  disabled: boolean;
  onClick: () => void;
};

const defaultProps: ConnectButtonProps = {
  message: 'Default Title',
  disabled: true,
  onClick: () => console.log("Default function")
}

const SConnectButton = styled.button`
  transition: all 0.15s ease-in-out;
  position: relative;
  line-height: 1em;
  background-image: none;
  outline: none;
  overflow: hidden;
  box-shadow: none;
  border: none;
  border-style: none;
  box-sizing: border-box;
  background-color: rgb(64, 153, 255);
  border: none;
  color: rgb(255, 255, 255);
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  width: 100%;
  margin: 0 auto;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  will-change: transform;
  &:disabled {
    opacity: 0.7;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`;
const ConnectButtonContent = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function ConnectButton({ message, disabled, onClick }: ConnectButtonProps): JSX.Element {
  return (
    <div className="ConnectButton">
      <SConnectButton
        type="button"
        disabled={disabled}
        onClick={() => onClick()}>
        <ConnectButtonContent>{message}</ConnectButtonContent>
      </SConnectButton>
    </div>
  );
}

ConnectButton.defaultProps = defaultProps;

export default ConnectButton;
