import { Variants } from "framer-motion"

export const smallCardFramerVariants: { [key: string]: Variants } = {
  2: {
    initial: {
      x: -50,
      y: -50,
      rotate: 0,
      scale: 1
    },
    hover: {
      x: 250,
      y: -260,
      rotate: -15,
      scale: 0.9
    }
  },
  4: {
    initial: {
      x: -50,
      y: -50,
      rotate: 0,
      scale: 1
    },
    hover: {
      x: -245,
      y: -285,
      rotate: 15,
      scale: 0.9
    }
  },
  5: {
    initial: {
      x: -50,
      y: -50,
      rotate: 0,
      scale: 1
    },
    hover: {
      x: 220,
      y: 240,
      rotate: 15,
      scale: 0.9
    }
  },
  7: {
    initial: {
      x: -50,
      y: -50,
      rotate: 0,
      scale: 1
    },
    hover: {
      x: -300,
      y: 180,
      rotate: -15,
      scale: 0.9
    }
  }
}
