import 'next-auth'

declare module 'next-auth' {
  interface UserType {
    id: number
    username?: string
    fullname?: string
    email: string
    provider: string
    confirmed?: boolean
    blocked?: boolean
    createdAt: Date | string
    updatedAt?: Date | string
    birthDate?: string
    description?: string
    domicile?: string
    gender?: string
    occupation?: string
    phoneNumber?: string
    country?: string
    province?: string
    city?: string
    income?: string
    profileImage?: {
      id?: number
      url?: string
    }
    membership?: {
      title: string
    }
    role: {
      id: number
      name: string
      description: string
      type: string
      createdAt: Date | string
      updatedAt: Date | string
    }
  }
  interface Session {
    name?: string
    email?: string
    jwt?: string
    user: UserType
  }
  interface User {
    jwt?: string
    user: UserType
  }
}
