import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
          <CompanionCard
              id="123"
              name="Companion One"
              topic="Topic One"
              subject="Subject One"
              duration={45}
              color="#FF5733"
          />

          <CompanionCard
              id="124"
              name="Companion Two"
              topic="Topic Two"
              subject="Subject Two"
              duration={30}
              color="#33FF57"
          />

          <CompanionCard
              id="125"
              name="Companion Three"
              topic="Topic Three"
              subject="Subject Three"
              duration={25}
              color="#ffda6e"
          />
      </section>

      <section className="home-section">
          <CompanionsList
              title="Recently completed sessions"
              companions={recentSessions}
              classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
      </section>
    </main>
  )
}

export default Page