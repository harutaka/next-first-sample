import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = (props) => {


  return (<div>
    <Head>
      <title>Local API Get</title>
    </Head>

    <div>{JSON.stringify(props.data)}</div>

  </div>);
}

Home.getInitialProps = async function () {
  const res = await fetch('http://127.0.0.1:3000/api')
  const data = await res.json()

  return {
    data: data
  }
}

export default Home