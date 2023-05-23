import Image from "next/image"
import Posts from "./Posts"

const ObtenerPosts = async () => {
  try {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/posts?populate=imagen`, { next: { revalidate: 1 } })
    const datos = await respuesta.json()
    return datos
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const { data } = await ObtenerPosts()

  return (
    <main className="flex flex-col w-full mt-24">
      <div className="flex p-10 gap-4 shadow-lg shadow-gray-500 rounded-lg mt-12 items-center w-3/5 mx-auto">
        <Image src={'/imgs/perfil.jpg'} alt="Foto del autor" width={400} height={400} className="w-96 h-96 rounded-full"/>
        <div className="grid text-black w-1/2">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-600 p-3 font-bold">Bienvenido a mi Blog</h1>
          <h3 className="text-light-blue-600 font-semibold">Maecenas finibus vulputate felis, ac lobortis mi bibendum in. Proin a consequat odio. Etiam sollicitudin dictum lacus</h3>

          <article className="flex gap-3 w-11/12 mx-auto mt-6">
            <Image src={'/imgs/react.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/css-3.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/html-5.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/js.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/json.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/mysql.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
            <Image src={'/imgs/typescript.png'} alt="React Icon" width={400} height={400} className="w-12 h-12"/>
          </article>
        </div>
      </div>


      <article className="mt-12 p-6 gap-12 grid justify-center -z-20 bg-black/5 px-14">
        <h2 className="text-2xl font-bold">Descubre y Aprende Acerca de la Programacion Conmigo</h2>
        <Posts posts={data} />
      </article>
    </main>
  )
}
