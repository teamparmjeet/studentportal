import React from 'react'
import Herobanner from '@/Components/Banner/Herobanner'
import Welcome from '@/Components/Welcome/Welcome'
import Courses from '@/Components/Courses/Courses'
import Whychooseus from '@/Components/Whychooseus/Whychooseus'
import Contactus from '@/Components/Contactus/Contactus'
import Feedback from '@/Components/Feedback/Feedback'
export default function page() {
  return (
    <>
      <Herobanner />
      <Welcome/>
      <Courses />
      <Whychooseus />
      <Contactus/>
      <Feedback/>
    </>
  )
}
