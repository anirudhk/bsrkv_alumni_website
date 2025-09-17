import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import RecentAlumni from '@/components/RecentAlumni'
import UpcomingEvents from '@/components/UpcomingEvents'
import NewsSection from '@/components/NewsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <RecentAlumni />
      <UpcomingEvents />
      <NewsSection />
    </div>
  )
}
