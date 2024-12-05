"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { Question, questions } from "../../config/question";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cardStyles = Array.from({ length: 3 }, (_, i) => i - 1);
  const [selected, setSelected] = useState<Question>();

  const getRandomQuestions = (
    questions: Question[],
    count: number
  ): Question[] => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5); // Shuffle array
    return shuffled.slice(0, count); // Pick the first `count` items
  };

  const randomQuestions = getRandomQuestions(questions, 13);

  return (
    <>
      <div className="container">
        {cardStyles.map((q, k) => {
          return (
            <button
              key={k}
              onClick={() => {
                onOpen();
                setSelected(randomQuestions[k]);
              }}
              className="card"
              style={{ "--i": q } as React.CSSProperties}
            >
              <img src="./images/cards/1.png" alt="" />
            </button>
          );
        })}
      </div>

      <Modal
        hideCloseButton
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop={"blur"}
        isOpen={isOpen}
        placement={"center"}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 200,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="items-center justify-center w-[500px] h-[726px] relative ">
          {(onClose) => (
            <>
               <div className="bg-white">
                    <ModalHeader className="flex flex-row gap-0  justify-center items-center absolute top-0 -left-4">
                      <Image
                        className="rounded-full "
                        src="/images/logo.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                      <p className="text-[#fff] capitalize text-2xl bg-[#2E2C2B]  -ml-4 rounded-2xl px-8 py-1">
                        {selected?.category}
                      </p>
                    </ModalHeader>
                    <ModalBody className="h-[680px]">
                      <div className="flex flex-col gap-8 justify-center items-center p-4 text-black border-2 border-[#2E2C2B] h-full rounded-lg relative">
                        <p className="text-4xl text-center leading-[3rem] tracking-wide">
                          {selected?.title}
                        </p>
                      </div>
                      <div className="absolute bottom-8 flex justify-center  w-[90%] rounded-full  h-[48px]">
                        <Button
                          isIconOnly
                          className="rounded-full w-[64px] h-[64px] text-3xl text-white bg-[#2E2C2B]"
                          onPress={onClose}
                        >
                          X
                        </Button>
                      </div>
                    </ModalBody>
                  </div>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="absolute bottom-0 w-full bg-black/20 p-4">
        <div className="flex gap-2 items-center justify-center opacity-30">
          <p className=" capitalize text-center">self talk </p>
          <Link
            href={
              "https://www.tiktok.com/@hamm.hammmm?is_from_webapp=1&sender_device=pc"
            }
          >
            by hamm.hammmm
          </Link>
        </div>
      </div>
    </>
  );
}
