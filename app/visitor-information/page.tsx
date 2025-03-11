'use client'

//import { Metadata } from 'next'
import Container from '@/app/_components/container'
import Header from '@/app/_components/header'
import Image from 'next/image'
import Chat from '../_components/chat'


export default function VisitorInformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container>
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-8 text-center animate-fade-up">
            Visitor Information
          </h1>

          {/* Location & Directions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fade-up">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Location & Directions</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.707690755844!2d-122.39053334857392!3d37.76808797975918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f171bd668f7%3A0x7a36ca110fb74c29!2sChase%20Center!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>1 Warriors Way</p>
                <p>San Francisco, CA 94158</p>
                <p className="mt-4">Accessible via Muni T-Line and multiple bus lines.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Parking Information</h3>
                <p className="text-gray-600">Multiple parking options available:</p>
                <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                  <li>Main Arena Garage - $40</li>
                  <li>South Street Garage - $35</li>
                  <li>Third Street Garage - $30</li>
                  <li>Validated parking available for events</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Public Transportation</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Muni T-Line: Third & 16th Street Station</li>
                  <li>Bus Lines: 22, 48, 55</li>
                  <li>Rideshare pickup/dropoff zones available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seating Charts */}
          <div className="mb-12 animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4">Seating Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/seating-hockey.jpg"
                  alt="Hockey Configuration"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white font-semibold">Hockey Configuration</p>
                </div>
              </div>
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/seating-basketball.jpg"
                  alt="Basketball Configuration"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white font-semibold">Basketball Configuration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="mb-12 animate-fade-up">
            <h2 className="text-2xl font-semibold mb-6">Arena Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Prohibited Items</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Outside food and beverages</li>
                  <li>Weapons of any kind</li>
                  <li>Professional cameras or recording devices</li>
                  <li>Laser pointers</li>
                  <li>Noisemakers</li>
                  <li>Large bags or backpacks</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">General Policies</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Clear bag policy in effect</li>
                  <li>No re-entry once you exit</li>
                  <li>Smoking prohibited in all areas</li>
                  <li>No standing on seats</li>
                  <li>Children 2 and under free on lap</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="animate-fade-up">
            <h2 className="text-2xl font-semibold mb-6">Arena Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Concessions</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Multiple food vendors</li>
                  <li>Full-service bars</li>
                  <li>Local food options</li>
                  <li>Mobile ordering available</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Services</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>First aid station</li>
                  <li>Guest services desk</li>
                  <li>ATMs available</li>
                  <li>Lost and found</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Accessibility</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Wheelchair seating</li>
                  <li>Assisted listening devices</li>
                  <li>Accessible restrooms</li>
                  <li>Service animal relief areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </Container>
    </div>
  )
}
