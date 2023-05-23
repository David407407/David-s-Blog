'use client'
import { useRouter } from "next/navigation";
import { Button } from "@material-tailwind/react";
import {
  DevicePhoneMobileIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/outline";

const Actions = () => {
    const router = useRouter()
  return (
    <div className="flex items-center gap-4">
      <Button 
        onClick={() => router.push('/proyectos')}
        variant="text" className="flex items-center gap-2 text-md font-medium hover:text-deep-purple-700 transition-colors hover:bg-deep-purple-400/20">
        Proyectos <CubeTransparentIcon strokeWidth={2} className="h-5 w-5" />
      </Button>
      <Button
        onClick={() => router.push('/contacto')}
        variant="text" className="flex items-center gap-2 text-md font-medium hover:text-deep-purple-700 transition-colors hover:bg-deep-purple-400/20">
        Contactame <DevicePhoneMobileIcon strokeWidth={2} className="h-5 w-5" />
      </Button>
    </div>
  )
}

export default Actions