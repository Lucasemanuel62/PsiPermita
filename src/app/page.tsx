import NavBar from "./components/NavBar"
import TelaInicio from "./components/Inicio"
import Funcionamento from "./components/funcionamento"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <TelaInicio />
        <Funcionamento />
      </main>
      <Footer />
    </div>
  )
}
