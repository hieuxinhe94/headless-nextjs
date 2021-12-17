import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
          {categories.map((category) => {
              return (
                <li class="nav-item" key={category.id}>
                     <Link href={`/category/${category.attributes.slug}`}>
                     <a class="page-scroll" href={'#' +category.id}>{category.attributes.name}</a>
                  </Link>
            </li>
              )
            })}
      </ul>
    </div>
  )
}

export default Nav
