"use client"
import { useState, useEffect } from "react"
import api from "@/services/api"
import Image from "next/image"

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
        <div className="p-10">
          {classData && (
            <ul className="flex flex-col space-y-5">
              {classData?.map((item: any) => (
                <li key={item?.id} className="flex items-center space-x-3">
                  <Image
                    src={item?.attributes?.thumbnail?.data?.attributes?.url}
                    width={200}
                    height={100}
                    alt="Picture of the author"
                  />
                  <span>{item?.attributes?.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  )
}
