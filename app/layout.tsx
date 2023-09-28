import HeaderMain from '@/components/header/HeaderMain'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthSessionProvider from '@/provider/SessionProvider'
import { Toaster } from 'react-hot-toast'
import { getCurrentUser } from '@/actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
	}) {

	const user = await getCurrentUser();

	console.log('From-> root: ',user)
	
  return (
		<html lang="en">
			<body className={inter.className}>
				<NextAuthSessionProvider>
					<Toaster position="bottom-right" reverseOrder={true} />
					<HeaderMain />
					{children}
				</NextAuthSessionProvider>
			</body>
		</html>
	);
}
