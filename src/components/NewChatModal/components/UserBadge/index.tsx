import { X } from "phosphor-react";
import { Button } from "../../../Button";
import { UserBadgeContainer } from "./styles";

type IUserBadgeProps = {
  displayName: string;
  photoURL: string;
  onRequestClose: () => void;
};

function UserBadge(props: IUserBadgeProps) {
  return (
    <UserBadgeContainer>
      <img src={props.photoURL} alt="" />
      <p>{props.displayName}</p>
      <Button type="button" onClick={props.onRequestClose}>
        <X />
      </Button>
    </UserBadgeContainer>
  );
}

export { UserBadge };
