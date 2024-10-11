import React, { useEffect, useRef, useState } from 'react'
import '@styles/blocks/fadein.scss'

const FadeIn = (props) => {
  const [visible, setvisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setvisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)

    return () => {observer.unobserve(domRef.current)}
  }, [])

  return (
    <div 
      className={`fade-in ${visible ? 'fade-in--visible' : ''}`}
      ref={domRef}
    >
      {props.children} 
    </div>
  )
}

export default FadeIn
