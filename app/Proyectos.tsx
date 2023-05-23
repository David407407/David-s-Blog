'use client'
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/outline";

const Proyectos = ({ proyectos }: { proyectos: any }) => {
    console.log(proyectos)
  return (
    <div className="grid grid-cols-2 gap-12">
        {
            proyectos.map((proyecto: any, index: number) => (
                <Card key={index} className="flex-row w-full max-w-[48rem]">
                    <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                        <Image 
                            src={`http://127.0.0.1:1337${proyecto.attributes.imagen.data[0].attributes.formats.medium.url}`} 
                            alt={`Post ${proyecto.titulo}`} 
                            width={400} 
                            height={400} 
                            className="w-full "
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                height: '100%',
                            }}
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="flex gap-4">
                            {
                                proyecto.attributes.tecnologias.data.map( ( img:any ) => (
                                    <Image 
                                        src={`http://127.0.0.1:1337${img.attributes.formats.small.url}`} 
                                        alt={`Post ${proyecto.titulo}`} 
                                        width={400} 
                                        height={400} 
                                        className="w-10 h-10"
                                    />
                                ))
                            }
                        </div>
                        <Typography variant="h4" color="blue"  className="mb-2">
                            {proyecto.attributes.titulo}
                        </Typography>
                        <div dangerouslySetInnerHTML={{ __html: proyecto.attributes.descripcion }} className="line-clamp-3" />
                        <div className="flex justify-between">
                           <Button variant="text" className="flex items-center gap-2 cursor-pointer font-medium hover:text-deep-purple-700 transition-colors hover:bg-deep-purple-400/20">
                                <Link href={proyecto.attributes.urlProyecto}>Ver Proyecto</Link> 
                                <LinkIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                            <Button variant="text" className="flex items-center text-blue-400 gap-2 cursor-pointer font-medium hover:text-deep-purple-700 transition-colors hover:bg-deep-purple-400/20">
                                <Link href={proyecto.attributes.urlGithub}>Github</Link> 
                                <Image src={'/imgs/github.png'} alt="React Icon" width={400} height={400} className="w-10 h-10"/>
                            </Button> 
                        </div>            
                    </CardBody>
                </Card>
            ))
        }
    </div>
  )
}

export default Proyectos