"use client"
import { useState, useEffect } from "react"
import api from "@/services/api"
import Image from "next/image"
import Link from "next/link"

export default function Class() {
  const [classData, setClassData] = useState([])
  useEffect(() => {
    api.get("/custom/classes").then((data) => {
      setClassData(data?.data?.data)
    })
  }, [])

  return (
    <main>
      <section>
        <div className="p-5">
          {classData && (
            <ul className="flex flex-col space-y-5">
              {classData?.map((item: any) => (
                <li key={item?.id} className="flex items-center space-x-3">
                  <Image
                    src={item?.attributes?.thumbnail?.data?.attributes?.url}
                    width={150}
                    height={70}
                    alt="Picture of the author"
                    className="rounded"
                  />
                  <div className="flex flex-col flex-1 space-y-1">
                    <p className="font-bold">{item?.attributes?.title}</p>
                    <p className="font-semibold text-yellow-600">
                      Rp {item?.attributes?.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Link href="/">
            <p className="mt-8 text-center hover:text-blue-500 hover:underline hover:underline-offset-1">
              Back to Home
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}
