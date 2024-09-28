import React from 'react'
import CategoryCard from './CategoryCard'
import { categoryInfos } from './CategoryFullInfos'
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
        {
        categoryInfos.map((infos, i)=>(
           <CategoryCard key={i} data = {infos} />
        ))
        }
        {/* console.log(category.id); */}

    </section>
  )
}

export default Category;