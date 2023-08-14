import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { m } from "framer-motion"

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { useState } from "react";

import {
  smallCardFramerVariants,
  bigCardFramerVariants,
  mobileBigCardFramerVariants,
  mobileSmallCardFramerVariants
} from "@/variants";

const cardVariants = cva("aspect-[5/6] bg-white rounded-md border-0 border-transparent absolute overflow-hidden pointer-events-none", {
  variants: {
    variant: {
      small: "w-[15vmin] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg",
      big: "w-[50vmin] shadow-lg p-2",
    }
  },
  defaultVariants: {
    variant: "big",
  }
})

export interface CardProps extends VariantProps<typeof cardVariants> {
  imgSrc?: string
  className?: string
  index?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls?: any;
}

export default function Card({ variant, imgSrc, className, index, controls }: CardProps) {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const bigCardVariants = isSmallScreen ? mobileBigCardFramerVariants : bigCardFramerVariants

  const smallCardVariants = isSmallScreen ? mobileSmallCardFramerVariants : smallCardFramerVariants

  const [isImageLoading, setImageLoading] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
  }

  if (isImageLoading) {
    className = cn(className, "animate-pulse")
  } else {
    className = cn(className, "animate-none")
  }

  return (
    <m.div
      className={cn(cardVariants({ variant }), className)}
      variants={(!variant || variant === "big") ? bigCardVariants[index ? index : 0] : smallCardVariants[index ? index : 0]}
      animate={controls}
      initial="initial"
      transition={{
        duration: 1,
        ease: [0.19, 1, 0.22, 1]
      }}>
      <m.img
        initial={{ opacity: '0' }}
        animate={{ opacity: isImageLoading ? 0 : 1 }}
        transition={
          ({ opacity: { delay: 0.5, duration: 0.4 } })
        }
        src={imgSrc}
        alt=""
        className="w-full h-full object-cover rounded-sm pointer-events-none"
        onLoad={imageLoaded} />
    </m.div>
  )
}
