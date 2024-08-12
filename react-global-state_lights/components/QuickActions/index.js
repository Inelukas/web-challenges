import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onToggleAll, lightCount }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => onToggleAll("off")}
        disabled={lightCount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => onToggleAll("on")}
        disabled={lightCount === 8}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
