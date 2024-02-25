import Navbar from '@/components/Navbar'
import './global.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Deviblle',
  description: 'Showcase, and discoverne things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
			<Navbar></Navbar>
			<main>
				{children}
			</main>
			<Footer></Footer>
		</body>
    </html>
  )
}
