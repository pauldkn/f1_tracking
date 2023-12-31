import cn from 'classnames'
import { Work_Sans as CustomFont } from 'next/font/google'
import { RaceResultSection } from '@/components/RaceResultSection'
import { LeagueResultSection } from '@/components/LeagueResultSection'

const font = CustomFont({ subsets: ['latin'], display: 'swap', weight: 'variable' })

export default function Home() {
  return (
    <div className={cn(font.className, 'flex flex-col gap-20 py-10 text-sm sm:p-10')}>
      <RaceResultSection />
      <LeagueResultSection />
    </div>
  )
}
