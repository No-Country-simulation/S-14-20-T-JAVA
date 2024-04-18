import React from 'react'
import { Link } from 'react-router-dom'
const SectionsLinks = ({link1, link2, link3}) => {
  return (
    <section className="flex font-extrabold justify-evenly ">
        <Link onClick={() => handleClick({parament})}>{link1}</Link>
        <Link onClick={() => handleClick({parament2})}>{link2}</Link>
        <Link onClick={() => handleClick({parament3})}>{link3}</Link>
      </section>
  )
}

export default SectionsLinks
