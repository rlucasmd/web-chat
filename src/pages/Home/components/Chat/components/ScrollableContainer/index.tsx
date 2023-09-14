/* eslint-disable no-unused-vars */
import {
  ReactNode,
  useCallback,
  useEffect,
  // useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ScrollContainerOuter,
  ScrollContainerInner,
  ScrollableMessagesContainer,
} from "./styles";
import { Button } from "../../../../../../components/Button";

type ISrollableContainer = {
  children: ReactNode;
  chatId: string;
};

function ScrollableContainer({ children, chatId }: ISrollableContainer) {
  const outerDiv = useRef<HTMLDivElement | null>(null);
  const innerDiv = useRef<HTMLDivElement | null>(null);

  const prevInnerDivHeight = useRef<number | undefined>(undefined);

  // const [showMessages, setShowMessages] = useState(true);
  const [showScrollButtom, setShowScrollButton] = useState(false);

  useEffect(() => {
    // console.log(chatId);
    // console.log(prevInnerDivHeight);
    // prevInnerDivHeight.current = undefined;
    return () => {
      console.log("cleanup");
      prevInnerDivHeight.current = undefined;
      setShowScrollButton(false);
    };
  }, [chatId]);

  useEffect(() => {
    const outerDivHeight = outerDiv.current?.clientHeight;
    const innerDivHeight = innerDiv.current?.clientHeight;
    const outerDivScrollTop = outerDiv.current?.scrollTop;
    if (
      !prevInnerDivHeight.current ||
      outerDivScrollTop === 0 ||
      outerDivScrollTop === prevInnerDivHeight.current - outerDivHeight!
    ) {
      console.log("if");
      outerDiv.current?.scrollTo({
        top: innerDivHeight! - outerDivHeight!,
        left: 0,
        behavior:
          prevInnerDivHeight.current && outerDivScrollTop !== 0
            ? "smooth"
            : "auto",
      });
      // setShowMessages(true);
    } else {
      setShowScrollButton(true);
    }

    prevInnerDivHeight.current = innerDivHeight;

    return () => {
      // console.log("cleanup");
      // setShowScrollButton(false);
      // prevInnerDivHeight.current = undefined;
    };
  }, [children]);

  const handleScrollToBottom = useCallback(() => {
    const outerDivHeight = outerDiv.current?.clientHeight;
    const innerDivHeight = innerDiv.current?.clientHeight;

    outerDiv.current?.scrollTo({
      top: innerDivHeight! - outerDivHeight!,
      left: 0,
      behavior: "smooth",
    });
    setShowScrollButton(false);
  }, []);

  return (
    <ScrollableMessagesContainer>
      <ScrollContainerOuter ref={outerDiv}>
        <ScrollContainerInner ref={innerDiv}>{children}</ScrollContainerInner>
      </ScrollContainerOuter>
      {showScrollButtom && (
        <Button onClick={handleScrollToBottom}>Novas menssages!</Button>
      )}
    </ScrollableMessagesContainer>
  );
}

export { ScrollableContainer };
