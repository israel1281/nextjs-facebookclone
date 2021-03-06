import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import { db } from "../firebase"

export default function Home({ posts }) {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await db.collection("post").orderBy
  ("timestamp", "desc").get()
  
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))
  
  return {
    props: {
      posts: docs
    },
  }
}
