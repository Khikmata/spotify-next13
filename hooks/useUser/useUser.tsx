import { createContext } from 'react'
import { IUserDetails, Subscription } from './types'
import { User } from '@supabase/auth-helpers-nextjs'
type userContextTypes = {
	accessToken: string | null
	user: User | null
	userDetails: IUserDetails | null
	isLoading: boolean
	subscription: Subscription | null
}

export const userContext = createContext<userContextTypes | undefined>(
	undefined
)

export type Props = Record<string, any>

export const userContextProvider = (props: Props) => {}
