"use client";

import { Metadata } from "next";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from "lucide-react";
import Chat from "../_components/chat";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function EventPlannerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container>
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-8 text-center animate-fade-up">
            Event Planning
          </h1>

          {/* Venue Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fade-up">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Venue Specifications
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-black">Capacity</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Hockey: 17,500</li>
                      <li>Basketball: 18,000</li>
                      <li>Concert: 19,500</li>
                      <li>Theater: 5,000-15,000</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Floor Space</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Total: 140,000 sq ft</li>
                      <li>Arena Floor: 17,000 sq ft</li>
                      <li>Ceiling Height: 85 ft</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Available Amenities
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional sound system</li>
                <li>LED video boards and ribbon displays</li>
                <li>Locker rooms and dressing areas</li>
                <li>Green rooms and production offices</li>
                <li>Loading dock with direct arena access</li>
                <li>Full-service catering available</li>
              </ul>
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Types of Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Accordion className="bg-white p-6 rounded-lg shadow-sm">
                <AccordionItem
                  key="1"
                  aria-label="Sports"
                  subtitle="Press to expand"
                  title={<h3 className="text-xl font-semibold">Sports</h3>}
                  className="text-l text-gray-600 cursor-pointer"
                >
                  <ul className="text-gray-600 space-y-2">
                    <li>Hockey tournaments</li>
                    <li>Basketball games</li>
                    <li>Wrestling events</li>
                    <li>Figure skating</li>
                    <li>Indoor soccer</li>
                  </ul>
                </AccordionItem>
              </Accordion>
              <Accordion className="bg-white p-6 rounded-lg shadow-sm">
                <AccordionItem
                  key="1"
                  aria-label="Entertainment"
                  subtitle="Press to expand"
                  title={<h3 className="text-xl font-semibold">Entertainment</h3>}
                  className="text-l text-gray-600 cursor-pointer"
                >
                  <ul className="text-gray-600 space-y-2">
                    <li>Concerts</li>
                    <li>Comedy shows</li>
                    <li>Family shows</li>
                    <li>Theater productions</li>
                    <li>Dance competitions</li>
                  </ul>
                </AccordionItem>
              </Accordion>
              <Accordion className="bg-white p-6 rounded-lg shadow-sm">
                <AccordionItem
                  key="1"
                  aria-label="Special Events"
                  subtitle="Press to expand"
                  title={<h3 className="text-xl font-semibold">Special Events</h3>}
                  className="text-l text-gray-600 cursor-pointer"
                >
                  <ul className="text-gray-600 space-y-2">
                    <li>Corporate events</li>
                    <li>Trade shows</li>
                    <li>Graduations</li>
                    <li>Religious events</li>
                    <li>Community gatherings</li>
                  </ul>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Rental Information */}
          <div className="mb-12 animate-fade-up">
            <h2 className="text-2xl font-semibold mb-6">Rental Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Basic Rental Includes
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Basic house lighting</li>
                  <li>Standard cleaning services</li>
                  <li>Event staff supervision</li>
                  <li>Basic security personnel</li>
                  <li>Standard equipment usage</li>
                  <li>Utilities during event hours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Additional Services
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Professional lighting design</li>
                  <li>Sound system operation</li>
                  <li>Additional security</li>
                  <li>Box office services</li>
                  <li>Marketing support</li>
                  <li>Catering services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">Event Booking</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For initial inquiries and availability checks
                </p>
                <Button
                  className="w-full"
                  onClick={() =>
                    (window.location.href = "mailto:events@arena.com")
                  }
                >
                  Contact Booking Team
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <p className="text-gray-600 mb-4">events@arena.com</p>
                <p className="text-gray-600">Response within 24-48 hours</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">Phone</h3>
                </div>
                <p className="text-gray-600 mb-4">(555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri, 9am-5pm PST</p>
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </Container>
    </div>
  );
}
