'use client'
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

const Posts = ({posts}: {posts: any}) => {
  return (
    <div className="grid grid-cols-3 gap-14">
        {
            posts.map((post: any) => (
                <Card className="mt-6 w-96 -z-10">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <Image src={`http://127.0.0.1:1337${post.attributes.imagen.data[0].attributes.formats.medium.url}`} alt={`Post ${post.titulo}`} width={400} height={400} className="h-full"/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {post.attributes.titulo}
                        </Typography>
                        <div dangerouslySetInnerHTML={{ __html: post.attributes.contenido }} className="line-clamp-3" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Leer</Button>
                    </CardFooter>
                </Card>
            ))
        }
    </div>
  )
}

export default Posts