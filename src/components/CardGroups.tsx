import Card from "./Card";
import { useAnimation, AnimatePresence, m } from "framer-motion";

const smallVariant = "small";

const bigVariant = "big";

const cardGroupsVariants = {
  enter: (direction: "left" | "right") => {
    return {
      x: direction === "left" ? '10vw' : '-10vw',
      scale: 0,
      rotate: direction === "left" ? 20 : -20,
    };
  },
  center: (direction: "left" | "right") => {
    return {
      zIndex: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.80, 0.10, 0.5, 1],
        delay: direction ? 0.3 : 0
      }
    }
  },
  exit: (direction: "left" | "right") => {
    return {
      scale: 0,
      x: direction === "left" ? '-12vw' : '12vw',
      rotate: direction === "left" ? -20 : 20,
      zIndex: 0,
      transition: {
        duration: 1,
        ease: [0.80, 1, 0, 1]
      }
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardGroups({ cardData, isActive, direction }: { cardData: string[], isActive: boolean, direction: any }) {
  const controls = useAnimation();

  // loop cards, show small card at index (2, 4, 5, 7), and show big card at index (1, 3, 6, 8)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cardArray: any = Array.from(
    { length: 8 },
    (_, index) => {
      if ([2, 4, 5, 7].includes(index + 1)) {
        return {
          variant: smallVariant,
          imgSrc: cardData[index],
        }
      }

      if ([1, 3, 6, 8].includes(index + 1)) {
        return {
          variant: bigVariant,
          imgSrc: cardData[index],
        }
      }
    }
  );

  return (
    <AnimatePresence mode="wait" custom={direction}>
      {isActive && (
        <m.div
          key={direction}
          onHoverStart={() => controls.start("hover")}
          onHoverEnd={() => controls.start("initial")}
          onPanStart={() => controls.start("hover")}
          onPanEnd={() => controls.start("initial")}
          className="absolute aspect-[5/6] w-[50vmin]"
          variants={cardGroupsVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1,
            ease: [0.19, 1, 0.22, 1]
          }}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {cardArray.map((cardData: any, index: number) => (
            <Card
              key={index}
              variant={cardData?.variant}
              imgSrc={cardData?.imgSrc}
              controls={controls}
              index={index + 1} />
          ))}
        </m.div>
      )}
    </AnimatePresence>
  )
}
