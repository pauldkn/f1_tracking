import cn from 'classnames'
import { Work_Sans as CustomFont } from 'next/font/google'
import { RaceResultSection } from '@/components/RaceResultSection'
import { LeagueResultSection } from '@/components/LeagueResultSection'

const font = CustomFont({ subsets: ['latin'], display: 'swap', weight: 'variable' })

export default function Home() {
  return (
    <div className={cn(font.className, 'flex flex-col gap-20 p-10')}>
      <LeagueResultSection />
      <RaceResultSection />
    </div>
  )
}
