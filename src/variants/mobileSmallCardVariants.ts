import { Variants } from "framer-motion"

export const mobileSmallCardFramerVariants: { [key: string]: Variants } = {
  2: {
    initial: {
      x: -50,
      y: -50,
      rotate: 0,
      scale: 1
    },
    hover: {
      x: 140,
      y: -150,
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
      x: -150,
      y: -180,
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
      x: 150,
      y: 140,
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
      x: -170,
      y: 120,
      rotate: -15,
      scale: 0.9
    }
  }
}

