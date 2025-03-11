import { Metadata } from 'next'
import CalendarComponent from '../_components/calendar-component'
import Container from '../_components/container'
import Header from '../_components/header'
import Image from 'next/image'
import Chat from '../_components/chat'

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'View and manage events',
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
    <Container>
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-8 text-center animate-fade-up">
            Calendar
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-card p-6 rounded-lg shadow-sm h-full w-full animate-fade-left">
              <div className="h-full w-full flex flex-col">
                <CalendarComponent />
                </div>
      </div>
            <div className="bg-card p-6 rounded-lg shadow-sm hidden lg:block animate-fade-right">
              <div className="aspect-square relative overflow-hidden rounded-lg animate-fade-in">
                <Image
                  src="/images/eventpicture.jpg"
                  alt="Community Arena"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent p-6">
                  <h2 className="text-white text-2xl font-bold mb-2 animate-fade-up">
                    Community Arena Events
                  </h2>
                  <p className="text-white/90 animate-fade-up [animation-delay:100ms]">
                    Stay updated with all the latest events and activities happening at our arena.
                  </p>
                </div>
        </div>
              <div className="mt-6 space-y-4 animate-fade-up [animation-delay:200ms]">
                <h3 className="text-xl font-semibold">
                  Event Guidelines
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Events must be approved by management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Minimum 2 weeks notice required
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Contact staff for event requirements
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Capacity limits must be observed
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-md mt-6">
                  <p className="text-sm text-muted-foreground">
                    For event bookings and inquiries, please contact our events team at{' '}
                    <a href="mailto:events@arena.com" className="text-primary hover:underline">
                      events@arena.com
                    </a>
                  </p>
        </div>
    </div>
            </div>
          </div>
        </div>
        <Chat />
      </Container>
    </div>
  )
}
