import NavBar from "./components/NavBar"
import TelaInicio from "./components/Inicio"
import Funcionamento from "./components/funcionamento"
import Testemunhos from "./components/Testemunhos"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <TelaInicio />
        <Funcionamento />
        <Testemunhos />
      </main>
      <Footer />
    </div>
  )
}
