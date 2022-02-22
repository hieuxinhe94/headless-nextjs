import React from "react"
import Link from "next/link"

const Nav = ({ categories, color }) => {
  console.log(categories)
  var textColor  = 'text-white';
  if(color) {
      textColor = color
  } 
  return (
    <div>
      <ul id="nav" class={ "items-center content-start mr-auto lg:justify-end navbar-nav lg:flex " + textColor }>
          {categories.map((category) => {
              return (
                <li class="nav-item" key={category.id}>
                     <Link href={`/pages/${category.attributes.slug}`}>
                     <a class="page-scroll" href={`/pages/${category.attributes.slug}`}>
                     <b >   
                          {category.attributes.name ?? category.attributes.Name}
                        </b>
                      </a>
                  </Link>
            </li>
              )
            })}
      </ul>
    </div>
  )
}

export default Nav
