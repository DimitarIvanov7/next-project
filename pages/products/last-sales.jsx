import React from 'react'
import { useEffect, useState } from 'react'

const LastSales = () => {
    const [sales, setSales] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
      const jsonData = await fetch('https://next-project-21e99-default-rtdb.firebaseio.com/sales.json')
      const data = await jsonData.json()
      const transformedSales = [];

      for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
            });
        }
        setSales(transformedSales)
        setIsLoading(false);
    }

    useEffect(() => {  
      getData()
    }, [])

    if(isLoading) {
      return <p>Loading...</p>
    }

    if(!sales) {
      return <p>No data yet...</p>
    }
    
  return (
    <div>{sales.map(sale => <div key={sale.id}><span>sale: {sale.id}</span><span>,  volume: {sale.volume}</span></div>)}</div>
  )
}

export default LastSales