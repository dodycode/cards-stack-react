import CardSwiper from "./components/CardSwiper";

import { LazyMotion, domAnimation } from "framer-motion"

import { dummyArtist } from "./lib/utils";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict={true}>
      <CardSwiper data={dummyArtist} />
    </LazyMotion>
  )
}
