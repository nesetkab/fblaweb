import Container from "@/app/_components/container"
import CoverImage from "@/app/_components/cover-image"
import Intro from "@/app/_components/intro"
import Subtext from "@/app/_components/subtext"
import Header from "./_components/header"
import HeroPost from "./_components/hero-post"
import Slider from "./slider"

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <div className="animate-fade-up">
          <Intro />
        </div>
        <div className="animate-fade-up [animation-delay:200ms]">
          <HeroPost />
        </div>
        <div className="animate-fade-up [animation-delay:300ms]">
          <Slider />
        </div>
        <div className="animate-fade-up [animation-delay:400ms]">
          <Subtext />
        </div>
      </Container>
    </main>
  )
}