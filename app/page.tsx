import Image from "next/image"
import Posts from "./Posts"
import Actions from "./Actions"
import Proyectos from "./Proyectos"
import BotonContacto from "./BotonContacto"
import { Oswald } from "next/font/google"

const oswald = Oswald({ weight: ['600'], subsets: ['latin'] })

const ObtenerPosts = async () => {
  try {
    const respuesta = await fetch(`${process.env.BACKEND_URL}/posts?populate=imagen`, { next: { revalidate: 1 } })
    const datos = await respuesta.json()
    return datos
  } catch (error) {
    console.log(error)
  }
}

const ObtenerProyectos = async () => {
  try {
    const respuesta = await fetch(`${process.env.BACKEND_URL}/proyectos?populate=imagen&&populate=tecnologias`, { next: { revalidate: 1 } })
    const datos = await respuesta.json()
    return datos
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const { data } = await ObtenerPosts()
  const { data: proyectos } = await ObtenerProyectos()

  return (
    <main className="flex flex-col w-full mt-24">
      <div className="flex p-10 gap-4 mt-12 items-center w-3/5 mx-auto">
        <div className="grid text-black w-1/2">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-600 p-3 font-bold">Andy Tarango</h1>
          <h3 className="text-light-blue-600 font-semibold px-3">Desarrollador Full-Stack</h3>

          <article className="flex gap-3 w-11/12 mx-auto mt-6 border-t-2 border-t-gray-800 pt-3 justify-center">
            <Image src={'/imgs/react.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/css-3.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/html-5.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/js.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/> 
            <Image src={'/imgs/typescript.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
          </article>

          <nav className="mt-4">
            <Actions />
          </nav>
        </div>
        <Image src={'/imgs/perfil.jpg'} alt="Foto del autor" width={400} height={400} className="w-96 h-96 rounded-full"/>

      </div>

      <article className="mt-12 p-6 gap-12 grid justify-center border-t-2 border-t-gray-600 w-11/12 mx-auto px-14">
        <h2 className={`text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700 mt-6 ${oswald.className}`}>Proyectos</h2>
        <Proyectos proyectos={proyectos} />
      </article>

      <article className="mt-12 p-6 gap-12 grid justify-center border-t-2 border-t-gray-600 w-11/12 mx-auto px-14">
        <h2 className={`text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700 mt-6 ${oswald.className}`}>Descubre y Aprende Acerca de la Programacion Conmigo</h2>
        <Posts posts={data} />
      </article>

      <article className="mt-12 p-6 gap-6 grid justify-center border-t-2 border-t-gray-600 w-11/12 mx-auto px-14">
        <h2 className={`text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700 mt-6 ${oswald.className}`}>Contactame</h2>
        <BotonContacto />
      </article>
    </main>
  )
}
