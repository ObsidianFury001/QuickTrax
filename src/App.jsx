import Layout from '@/Layout'
import { ThemeProvider } from "@/components/ThemeProvider"

function App() {

  return (
    <>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App
