import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from "@chakra-ui/react"
import React from "react"

export function SendFeedbackAlert({ onSubmit }: { onSubmit: () => void }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef(null)
  
    return (
      <>
        <Button 
            onClick={onOpen}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline">
          Відправити відгук
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Відгук
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Ви впевнені, що хочете відправити відгук?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Закрити
                </Button>
                <Button colorScheme='green' onClick={onSubmit} ml={3}>
                  Відправити
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }