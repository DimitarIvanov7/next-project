import React from 'react'
import { useRouter } from "next/router";

const FilteredItems = () => {


    const router = useRouter();

    // console.log(router.query.slug);

    const data = router.query.slug

    console.log(data[0]);
  return (
    <div>FilteredItems</div>
  )
}

export default FilteredItems