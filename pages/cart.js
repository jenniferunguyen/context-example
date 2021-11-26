import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

import { ItemContext, useItems } from '../context/ItemContext'


export default function Checkout() {
  const { user, setUser } = useUser()

  const { items, setItems } = useItems()
  const nameCatalog = items.map(e => e.name)

  const displayCard = e => {
    if (nameCatalog.includes(e)) {
      let item = items.filter(i => i.name == e)
      console.log(item[0].price)
      return (
        <article className="card">
          <div className="img-wrapper">
            <img src={item[0].img} alt={item[0].name} />
          </div>
          <div className="content">
            <h2 className="plant-name">{item[0].name}</h2>
            <p className="price">${item[0].price}</p>
          </div>
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
        {/* DELETE LINE BELOW -------------------------------------------------------------------------------------- */}
        {/* <p>You have {Object.values(user.cart).length} items in your cart.</p> */}
        <div>
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */}
          {/* <p>{JSON.stringify(user.cart)}</p> */}
          <p>{user.cart.map(thing => displayCard(thing))}</p>
        </div>
      </main>
    </div>
  )
}
