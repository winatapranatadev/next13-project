import 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    jwt?: string
    user: {
      id: number
      username?: string
      email: string
      provider: string
      confirmed?: boolean
      blocked?: boolean
      createdAt: Date | string
      updatedAt?: Date | string
      role: {
        id: number
        name: string
        description: string
        type: string
        createdAt: Date | string
        updatedAt: Date | string
      }
    }
  }
}
