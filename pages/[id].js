import React from 'react'
import fs from 'fs/promises'
import path from "path"

const Product = (props) => {
    const loadedProduct = props.loadedProduct;

    if(!loadedProduct) return <p>Loading...</p>
  return (
    <div>

        <h2>Product</h2>
        <p>{JSON.stringify(props.loadedProduct)}</p>
        
        </div>
  )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
  
    return data;
  }

export const  getStaticProps = async (context) => {
    const { params } = context

    const productId = params.id

    const data = await getData()

    console.log(data);
    const product = data.products.find(product => product.id === productId)

    if(!product) return {
        notFound:true
    }

    return {
        props: {
            loadedProduct: product
        }
    }
}

export const getStaticPaths = async () => {
    const data = await getData()
    const pathsData = data.products.map(product => product.id)
    .map(id => ({params: { id: id}}))
    return {
        paths: pathsData,
        fallback: true
    }
}


export default Product