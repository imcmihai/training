import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'
import {recentSessions} from "@/constants"

const Page = () => {
  return (
    <main>
        <h1 className='text-2xl underline'> 
            Popular Companions
        </h1>
        <section className='home-section'>
            <CompanionCard
            id= '123'
            name = ' Neura the Brainy Explorer'
            topic =  'neural Network of the brain'
            subject = ' science'
            duration={30}
            color='#e5d0ff'
            />

             <CompanionCard
            id= '123'
            name = ' Neura the Brainy Explorer'
            topic =  'neural Network of the brain'
            subject = ' science'
            duration={30}
            color='#e5d0ff'
            />

             <CompanionCard
            id= '123'
            name = ' Neura the Brainy Explorer'
            topic =  'neural Network of the brain'
            subject = ' science'
            duration={30}
            color='#e5d0ff'
            />
        </section>

         

        <section className='home-section'>
          <CompanionsList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"/>
          <Cta/>
        </section>
    </main>
  )
}

export default Page