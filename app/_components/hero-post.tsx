import Link from 'next/link'
import CoverImage from './cover-image'
export default function HeroPost() {
  return (
    <section>
      <div className="mb-8 md:mb-16 animate-fade-up">
        <CoverImage title="Featured Event" src="/images/arena.jpg" />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className="animate-fade-left">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              href="/calendar"
              className="inline-flex items-center px-6 py-3 text-4xl font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-300 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              Upcoming Events
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            Check out our latest events and activities
          </div>
        </div>
        <div className="animate-fade-right">
          <p className="text-lg leading-relaxed mb-4">
            Join us for exciting events throughout the year. From sports tournaments to community gatherings,
            there's something for everyone at the Community Arena.
          </p>
          
        </div>
      </div>
    </section>
  )
}