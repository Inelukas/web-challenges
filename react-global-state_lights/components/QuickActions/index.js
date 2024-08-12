import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onTurnAllOff,
  onTurnAllOn,
  lightCount,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onTurnAllOff} disabled={lightCount === 0}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onTurnAllOn} disabled={lightCount === 8}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
