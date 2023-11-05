import Head from "next/head";
import Header from "../Componets/Header";
import Banner from '../Componets/Banner'
import ProductFeed from '../Componets/ProductFeed.js'
import { getSession} from 'next-auth/react'
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header className='bg-blue' />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />

      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())

  return {
    props: {
      products,
      session
    }
  }
}