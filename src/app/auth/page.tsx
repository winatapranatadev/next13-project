"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Signin() {
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const signed: any = await signIn("credentials", {
      redirect: false,
      password: data.get("password"),
      identifier: data.get("username"),
    })
    if (signed.error && signed.error === "CredentialsSignin") {
      alert("username & password salah")
    } else {
      alert("login sukses")
      router.push("/class")
    }
  }

  return (
    <main>
      <section className="flex items-center justify-center">
        <div className="w-1/3 px-16 py-20 mt-16 border rounded">
          <form
            action=""
            className="flex flex-col items-center w-full space-y-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="w-full p-2 border rounded"
              name="username"
            />
            <input
              type="password"
              className="w-full p-2 border rounded"
              name="password"
            />
            <button
              className="px-8 py-2 text-sm text-white bg-red-700 rounded-full w-max"
              type="submit"
            >
              Masuk
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
