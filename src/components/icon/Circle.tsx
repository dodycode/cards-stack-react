import { SVGMotionProps, m, useAnimation } from "framer-motion";

interface SVGProps extends SVGMotionProps<SVGSVGElement> {
  fillColor: string,
  children?: React.ReactNode
}

const svgVariants = {
  initial: {
    scale: 1,
    cursor: "pointer"
  },
  hover: {
    scale: 1.08,
    cursor: "pointer"
  }
}

const innerCircleVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  }
}

export default function Circle({ fillColor, children, ...props }: SVGProps) {
  const controls = useAnimation()

  return (
    <m.svg
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      variants={svgVariants}
      initial="initial"
      whileHover="hover"
      transition={{
        duration: .4,
        ease: [.215, 0.61, 0.355, 1]
      }}
      onMouseEnter={() => controls.start("hover")}
      onMouseLeave={() => controls.start("initial")}
      whileTap={{ scale: 0.2, cursor: "pointer" }}
      className="cursor-pointer"
      {...props}>
      <m.circle
        cx="35"
        cy="35"
        r="26.5"
        stroke={fillColor}
        strokeWidth="3"
        variants={innerCircleVariants}
        animate={controls}></m.circle>
      <circle cx="35" cy="35" r="26.5" stroke={fillColor} strokeWidth="3"></circle>
      {children}
    </m.svg>
  )
}
