import { useToast, Wrap } from "@chakra-ui/react";
import { Button, WrapItem } from "@chakra-ui/react";

function ToastExample() {
  const toast = useToast();
  const positions = ["top"];
  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: "Login Warning.",
                description: "Please get verified first to view full details",
                status: "warning",
                duration: 9000,
                isClosable: true,
                position: position,
              })
            }
          >
            Full View
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default ToastExample;
