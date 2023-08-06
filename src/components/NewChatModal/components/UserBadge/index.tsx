import { X } from "phosphor-react";
import { Button } from "../../../Button";
import { UserBadgeContainer } from "./styles";

function UserBadge() {
  return (
    <UserBadgeContainer>
      <img src="https://github.com/ranieri3232.png" alt="" />
      <p>Ranieri Lucas</p>
      <Button type="button">
        <X />
      </Button>
    </UserBadgeContainer>
  );
}

export { UserBadge };
