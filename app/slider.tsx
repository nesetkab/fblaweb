'use client'

import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function NextArrow(props: any) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 group"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
    </button>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 group"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
    </button>
  )
}

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current: number) => setCurrentSlide(current),
  }

  const images = [
    '/images/slide1.jpg',  // Hockey game or tournament
    '/images/slide2.jpg',  // Basketball game
    '/images/slide3.jpg',  // Concert or performance
    '/images/slide4.jpg',  // Community market or fair
    '/images/slide5.jpg',  // Figure skating exhibition
    '/images/slide6.jpg',  // Youth sports camp
  ]

  const imageAlts = [
    'Hockey tournament in progress at the Community Arena',
    'Basketball championship game on the main court',
    'Live concert performance with enthusiastic audience',
    'Bustling community market with local vendors',
    'Figure skating exhibition showcasing local talent',
    'Youth sports camp with active participants'
  ]

  return (
    <div className="mb-16 animate-fade-up">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="animate-fade-in">
              <div className="relative aspect-[16/9]">
                <Image
                  src={src}
                  alt={imageAlts[index]}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}