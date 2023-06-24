import React from 'react'
import Hero from '../components/Hero'
import Feedbacks from '../components/Feedbacks'
import Contact from '../components/Contact'
import CarCard from '../components/CarCard'

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <CarCard />
            <Feedbacks />
            <Contact />
        </div>
    )
}

export default Home