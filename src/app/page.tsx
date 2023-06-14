"use client"
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-36">
        Welcome to Next 13 Project
      </h1>
      <Link href="/class">
        <p className="mt-8 text-center hover:text-blue-500 hover:underline hover:underline-offset-1">
          Click here to see the class!
        </p>
      </Link>
      <div className="flex justify-center w-full mt-8">
        <button
          className="px-8 py-2 text-sm text-white bg-red-700 rounded-full w-max"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </main>
  )
}
