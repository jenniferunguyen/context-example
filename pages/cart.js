import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'
import { useState } from 'react'

import { ItemContext, useItems } from '../context/ItemContext'

export default function Checkout() {
  const { user, setUser } = useUser()

  const { items, setItems } = useItems()
  const nameCatalog = items.map(e => e.name)

  const displayCard = e => {
    if (nameCatalog.includes(e)) {
      let item = items.filter(i => i.name == e)
      return (
        <article className="card-in-cart">
          <div className="img-wrapper">
            <img src={item[0].img} alt={item[0].name} />
          </div>
          <div className="content">
            <h2 className="plant-name">{item[0].name}</h2>
            <p className="price">${item[0].price}</p>
          </div>
          <style jsx>{`
            .card-in-cart {
              flex: 1;
              overflow: hidden;
              border-radius: 20px;
              margin: 1em;
              width: 100%; 
              height: 200px;
              display: flex;
              flex-direction: row;
              background-color: white;
              align-items: center;
              justify-content: space-between
            }
            .card-in-cart .img-wrapper {
              overflow: hidden;
              max-height: 100%;
              width: 175px;
              margin: 10px 100px 10px 10px;
              border-radius: 15px;
            }
            .card-in-cart .img-wrapper img {
              display: block;
              overflow: hidden;
              width: 100%;
              object-fit: contain;
            }
            .card-in-cart .content {
              padding: 20px;
              text-align: right;
            }
            h2 {
              color: green;
            }
        `}</style>
        </article>
      )
    } 
  }

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{user.name}, let's checkout!</h1>
        <p>You have {user.cart.length} items in your cart.</p>
        <div>
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */}
          {user.cart.map(thing => displayCard(thing))}
        </div>
        <h2>Total: ${user.total}</h2>
        <style jsx>{`
          h1, p {
            color: white;
          }
          h2 {
            color: white;
            font-weight: bold;
            font-size: large;
            text-align: right;
          }
          `}</style>
      </main>
    </div>
  )
}
