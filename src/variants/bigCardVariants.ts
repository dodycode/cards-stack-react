import { Variants } from "framer-motion"

export const bigCardFramerVariants: { [key: string]: Variants } = {
  1: {
    initial: {
      x: -10,
      rotate: -1,
      y: 0,
      scale: 1
    },
    hover: {
      x: -150,
      y: 20,
      rotate: -20,
      scale: 0.9
    }
  },
  3: {
    initial: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1
    },
    hover: {
      x: -40,
      y: 5,
      rotate: -7.5,
      scale: 0.9
    }
  },
  6: {
    initial: {
      x: -6,
      y: 0,
      rotate: -3,
      scale: 1
    },
    hover: {
      x: 80,
      y: 5,
      rotate: 7.5,
      scale: 0.9
    }
  },
  8: {
    initial: {
      x: 10,
      y: 3,
      rotate: 5,
      scale: 1
    },
    hover: {
      x: 200,
      y: 20,
      rotate: 20,
      scale: 0.9
    }
  }
}
