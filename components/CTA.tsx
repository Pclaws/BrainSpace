import React from 'react'
import Image from 'next/image';
import Link from "next/link";


const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start learning your way</div>
            <h2 className="text-3xl font-bold">
               Build and customize your Learning Companion
            </h2>
            <p>Pick your perfect learning companion and unlock a personalized journey to mastery.
                Start your unique learning adventure today!
            </p>

            <Image src="images/cta.svg" alt="Cta" width={256} height={256} />

            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                <Link href="/companions/new">
                    <p>Build a New Companion</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta
