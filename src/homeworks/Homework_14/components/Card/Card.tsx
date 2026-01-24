import Message from "homeworks/Homework_14/components/Message/Message";

import { CardWrapper, FullNameTitle } from "./styles";

function Card() {
  return (
    <CardWrapper>
      <FullNameTitle>John Johnson</FullNameTitle>
      <Message />
    </CardWrapper>
  );
}

export default Card;
