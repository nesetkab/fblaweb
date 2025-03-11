'use client'
import Container from '@/app/_components/container'
import Header from '@/app/_components/header'
import TicketList from '@/app/_components/ticket-list'
import Chat from '../_components/chat'

export default function BoxOfficePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container>
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-8 text-center animate-fade-up">
            Box Office
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-fade-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Event Schedule</h2>
                <TicketList />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-right">
              <h2 className="text-2xl font-semibold mb-4">Ticket Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  • All tickets are non-refundable
                </p>
                <p>
                  • Please arrive 30 minutes before event time
                </p>
                <p>
                  • Bring valid ID for will-call pickup
                </p>
                <p>
                  • Children under 3 enter free for most events
                </p>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600">
                  Contact our box office at{' '}
                  <a href="tel:555-0123" className="text-blue-600 hover:underline">
                    555-0123
                  </a>
                  {' '}or email{' '}
                  <a href="mailto:tickets@arena.com" className="text-blue-600 hover:underline">
                    tickets@arena.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </Container>
    </div>
  )
}
