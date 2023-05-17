import './globals.css'
import { Inter, Lora, Roboto } from 'next/font/google'
import Provider from './provider'
import SectionContainer from '@/components/SectionContainer'



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata = {
  title: 'Tabsnation - Play Guitar, Ukulele tabs & chords',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <Provider>
          <SectionContainer>
            {children}
          </SectionContainer>
        </Provider>
      </body>
    </html>
  )
}
