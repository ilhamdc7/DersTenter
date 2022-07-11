import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Description= ({product}) => {

console.log(product)

useEffect(() => {

},[])


  return (
    <>
        <div>{product?.title}</div>
        <img src={product?.image} width="200px" height={'200px'}/>
    </>

  )
}

export default Description


export async function getServerSideProps(context) {
    const {id} = context.query
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return {
      props: {
        product : data
      }
    }
  }