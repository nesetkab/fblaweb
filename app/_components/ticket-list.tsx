'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useDevMode } from '../_context/dev-mode-context'
import TicketDialog from './ticket-dialog'

interface Ticket {
  id: string
  eventId: string
  type: string
  price: number
  available: number
}

const events = [
  {
    id: '1',
    title: 'Hockey Tournament',
    description: 'Regional youth hockey tournament - Division A',
    date: new Date('2025-03-20'),
    time: '09:00 AM',
    tickets: [
      { id: '1-1', eventId: '1', type: 'Adult', price: 25, available: 100 },
      { id: '1-2', eventId: '1', type: 'Child (under 12)', price: 15, available: 50 },
    ]
  },
  {
    id: '2',
    title: 'Figure Skating Exhibition',
    description: 'Annual winter figure skating showcase featuring local talent',
    date: new Date('2025-03-22'),
    time: '07:00 PM',
    tickets: [
      { id: '2-1', eventId: '2', type: 'General Admission', price: 30, available: 200 },
      { id: '2-2', eventId: '2', type: 'VIP', price: 50, available: 50 },
    ]
  },
  {
    id: '3',
    title: 'Public Skating Session',
    description: 'Open skating session for all skill levels',
    date: new Date('2025-03-25'),
    time: '02:00 PM',
    tickets: [
      { id: '3-1', eventId: '3', type: 'Adult', price: 12, available: 150 },
      { id: '3-2', eventId: '3', type: 'Child', price: 8, available: 150 },
      { id: '3-3', eventId: '3', type: 'Skate Rental', price: 5, available: 100 },
    ]
  },
  {
    id: '4',
    title: 'High School Basketball',
    description: 'Championship game - Central vs Eastern High',
    date: new Date('2025-03-27'),
    time: '06:30 PM',
    tickets: [
      { id: '4-1', eventId: '4', type: 'General Admission', price: 10, available: 300 },
      { id: '4-2', eventId: '4', type: 'Student', price: 5, available: 200 },
    ]
  },
  {
    id: '5',
    title: 'Community Market',
    description: 'Weekly indoor community market featuring local vendors',
    date: new Date('2025-03-28'),
    time: '10:00 AM',
    tickets: [
      { id: '5-1', eventId: '5', type: 'General Entry', price: 5, available: 500 },
      { id: '5-2', eventId: '5', type: 'Early Bird (8AM Entry)', price: 8, available: 100 },
    ]
  },
  {
    id: '6',
    title: 'Concert: Local Bands Night',
    description: 'Featuring three local bands - All ages welcome',
    date: new Date('2025-04-02'),
    time: '08:00 PM',
    tickets: [
      { id: '6-1', eventId: '6', type: 'General Admission', price: 20, available: 250 },
      { id: '6-2', eventId: '6', type: 'VIP (Meet & Greet)', price: 40, available: 50 },
    ]
  },
  {
    id: '7',
    title: 'Senior Fitness Class',
    description: 'Low-impact exercise class for seniors',
    date: new Date('2025-04-05'),
    time: '11:00 AM',
    tickets: [
      { id: '7-1', eventId: '7', type: 'Single Class', price: 10, available: 30 },
      { id: '7-2', eventId: '7', type: '5-Class Package', price: 40, available: 20 },
    ]
  },
  {
    id: '8',
    title: 'Youth Basketball Camp',
    description: 'Three-day basketball skills camp for ages 8-14',
    date: new Date('2025-04-07'),
    time: '09:00 AM',
    tickets: [
      { id: '8-1', eventId: '8', type: 'Full Camp', price: 150, available: 40 },
      { id: '8-2', eventId: '8', type: 'Single Day', price: 60, available: 15 },
    ]
  },
  {
    id: '9',
    title: 'Charity Gala Dinner',
    description: 'Annual fundraising event for local youth sports programs',
    date: new Date('2025-04-10'),
    time: '06:00 PM',
    tickets: [
      { id: '9-1', eventId: '9', type: 'Individual', price: 75, available: 200 },
      { id: '9-2', eventId: '9', type: 'Table (8 seats)', price: 550, available: 25 },
    ]
  },
  {
    id: '10',
    title: 'Wrestling Tournament',
    description: 'Regional wrestling championship matches',
    date: new Date('2025-04-15'),
    time: '10:00 AM',
    tickets: [
      { id: '10-1', eventId: '10', type: 'All-Day Pass', price: 25, available: 300 },
      { id: '10-2', eventId: '10', type: 'Finals Only', price: 15, available: 150 },
    ]
  },
  {
    id: '11',
    title: 'Dance Competition',
    description: 'Annual dance showcase featuring multiple styles and age groups',
    date: new Date('2025-04-17'),
    time: '01:00 PM',
    tickets: [
      { id: '11-1', eventId: '11', type: 'General Admission', price: 20, available: 400 },
      { id: '11-2', eventId: '11', type: 'Premium Seating', price: 35, available: 100 },
    ]
  },
  {
    id: '12',
    title: 'Community Theater Show',
    description: 'Local theater group presents "The Winter Tale"',
    date: new Date('2025-04-20'),
    time: '07:30 PM',
    tickets: [
      { id: '12-1', eventId: '12', type: 'Orchestra', price: 30, available: 150 },
      { id: '12-2', eventId: '12', type: 'Balcony', price: 20, available: 100 },
    ]
  }
]

export default function TicketList() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null)
  const { isDevMode } = useDevMode()

  const handlePurchase = (event: typeof events[0]) => {
    setSelectedEvent(event)
    setIsDialogOpen(true)
  }

  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())

  const futureEvents = sortedEvents.filter(event => event.date >= new Date())

  const toggleEvent = (eventId: string) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId)
  }

  return (
    <div className="space-y-2">
      {futureEvents.map((event) => (
        <div key={event.id} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleEvent(event.id)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg">
              {format(event.date, 'MMM d, yyyy')} - {event.time}
            </span>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedEventId === event.id ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {expandedEventId === event.id && (
            <div className="p-4 border-t bg-gray-50 animate-fade-down">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                </div>
                
                <div className="space-y-2">
                  {event.tickets.map((ticket) => (
                    <div 
                      key={ticket.id} 
                      className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm"
                    >
                      <div>
                        <span className="font-medium">{ticket.type}</span>
                        <span className="text-gray-600 ml-2">
                          ${ticket.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm ${
                          ticket.available > 0 
                            ? 'text-gray-600' 
                            : 'text-red-500'
                        }`}>
                          {ticket.available > 0 
                            ? `${ticket.available} available` 
                            : 'Sold Out'
                          }
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handlePurchase(event)}
                  className="w-full"
                  disabled={event.tickets.every(t => t.available === 0)}
                >
                  Purchase Tickets
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}

      <TicketDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        event={selectedEvent}
      />
    </div>
  )
}
