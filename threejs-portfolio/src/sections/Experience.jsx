import { Canvas } from '@react-three/fiber'
import React from 'react'
import { workExperiences } from '../constants'

const Experience = () => {
  return (
    <section className='c-space'>
      <div className='w-full text-white-600'>
         <h3 className='head-text'>
            My Work Experience
         </h3>

         <div className='work-container'>
            <div className='work-canvas'>
               <Canvas>

               </Canvas>

            </div>

            <div className='work-content'>
               <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                  {workExperiences.map(({name, pos, duration, title, icon,animation, id}) => (
                     <div key={id} className='work-content_container group'>
                        <div className='flex flex-col h-full justify-start items-center py-2'>
                           <div className='work-content_logo'>
                              <img src={icon} alt="logo" className='w-full h-full' />
                           </div>

                        </div>

                     </div>
                  ))}

               </div>

            </div>

         </div>

      </div>
    </section>
  )
}

export default Experience
