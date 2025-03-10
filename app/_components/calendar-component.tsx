'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { Event } from '@/interfaces/event'
import { cn } from '@/lib/utils'
import EventDialog from './event-dialog'
import PasswordDialog from './password-dialog'
import { Button } from '@/components/ui/button'
import { Plus, Trash } from 'lucide-react'
import { useDevMode } from '../_context/dev-mode-context'

export default function CalendarComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Hockey Tournament',
      description: 'Regional youth hockey tournament - Division A',
      date: new Date('2025-03-20'),
      time: '09:00 AM',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Figure Skating Exhibition',
      description: 'Annual winter figure skating showcase featuring local talent',
      date: new Date('2025-03-22'),
      time: '07:00 PM',
      color: 'bg-purple-500'
    },
    {
      id: '3',
      title: 'Public Skating Session',
      description: 'Open skating session for all skill levels',
      date: new Date('2025-03-25'),
      time: '02:00 PM',
      color: 'bg-green-500'
    },
    {
      id: '4',
      title: 'High School Basketball',
      description: 'Championship game - Central vs Eastern High',
      date: new Date('2025-03-27'),
      time: '06:30 PM',
      color: 'bg-orange-500'
    },
    {
      id: '5',
      title: 'Community Market',
      description: 'Weekly indoor community market featuring local vendors',
      date: new Date('2025-03-28'),
      time: '10:00 AM',
      color: 'bg-yellow-500'
    },
    {
      id: '6',
      title: 'Concert: Local Bands Night',
      description: 'Featuring three local bands - All ages welcome',
      date: new Date('2024-04-02'),
      time: '08:00 PM',
      color: 'bg-red-500'
    },
    {
      id: '7',
      title: 'Senior Fitness Class',
      description: 'Low-impact exercise class for seniors',
      date: new Date('2024-04-05'),
      time: '11:00 AM',
      color: 'bg-teal-500'
    },
    {
      id: '8',
      title: 'Youth Basketball Camp',
      description: 'Three-day basketball skills camp for ages 8-14',
      date: new Date('2025-04-07'),
      time: '09:00 AM',
      color: 'bg-blue-500'
    },
    {
      id: '9',
      title: 'Charity Gala Dinner',
      description: 'Annual fundraising event for local youth sports programs',
      date: new Date('2025-04-10'),
      time: '06:00 PM',
      color: 'bg-pink-500'
    },
    {
      id: '10',
      title: 'Wrestling Tournament',
      description: 'Regional wrestling championship matches',
      date: new Date('2025-04-15'),
      time: '10:00 AM',
      color: 'bg-indigo-500'
    },
    {
      id: '11',
      title: 'Dance Competition',
      description: 'Annual dance showcase featuring multiple styles and age groups',
      date: new Date('2025-04-17'),
      time: '01:00 PM',
      color: 'bg-purple-500'
    },
    {
      id: '12',
      title: 'Community Theater Show',
      description: 'Local theater group presents "The Winter Tale"',
      date: new Date('2025-04-20'),
      time: '07:30 PM',
      color: 'bg-emerald-500'
    }
  ])
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)
  const { isDevMode } = useDevMode()

  const hasEvents = (day: Date) => {
    return events.some(event => 
      format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    )
  }

  const getEventsForDate = (day: Date) => {
    return events.filter(event => 
      format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    )
  }

  const handleAddEventClick = () => {
    setIsEventDialogOpen(true)
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId))
  }

  const handleAddEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...eventData,
      id: Math.random().toString(36).substr(2, 9)
    }
    setEvents([...events, newEvent])
  }

  return (
    <div className="flex flex-col h-full w-full space-y-4">
      <div className="w-full flex-none animate-fade-in">
        <div className="w-full">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
            className="w-full rounded-md border shadow"
        modifiers={{
          hasEvent: (date) => hasEvents(date),
        }}
        modifiersClassNames={{
          hasEvent: 'has-events',
        }}
        components={{
          DayContent: (props) => {
            const dayEvents = getEventsForDate(props.date)
            return (
                  <div className="relative w-full h-full flex items-center justify-center">
                <div className={cn(
                      'flex items-center justify-center',
                  dayEvents.length > 0 && 'font-bold'
                )}>
                  {props.date.getDate()}
                </div>
                {dayEvents.length > 0 && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="flex gap-0.5">
                          {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`w-1 h-1 rounded-full ${event.color}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          }
        }}
      />
    </div>
          </div>
          
      {date && (
        <div className="flex-1 overflow-auto animate-fade-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Events for {format(date, 'MMMM d, yyyy')}
            </h2>
                  {isDevMode && (
                    <Button
                onClick={handleAddEventClick}
                className="flex items-center gap-2 animate-fade-in"
                    >
                <Plus className="w-4 h-4" />
                Add Event
              </Button>
            )}
              </div>
          
          <div className="space-y-2">
            {getEventsForDate(date).map((event, index) => (
              <div
                key={event.id}
                className="p-4 rounded-md border shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{event.title}</h3>
                      <span className="text-sm text-gray-500">
                        {event.time}
                      </span>
          </div>
                    {event.description && (
                      <p className="text-gray-600 text-sm">{event.description}</p>
      )}
    </div>
                  {isDevMode && (
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteEvent(event.id)}
                      className="h-8 w-8 flex-shrink-0 ml-4 animate-fade-in"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {getEventsForDate(date).length === 0 && (
              <p className="text-gray-500 text-center py-4 animate-fade-in">
                No events scheduled for this date
              </p>
            )}
          </div>
        </div>
      )}

      <EventDialog
        isOpen={isEventDialogOpen}
        onClose={() => setIsEventDialogOpen(false)}
        onSave={handleAddEvent}
        selectedDate={date || new Date()}
      />
    </div>
  )
}
