"use client"
import { LogoProfile } from "@/public/images"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover"

import Image from "next/image"
import { Avatar, AvatarFallback } from "../../ui/avatar"

export default function Profile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer">
          <Avatar className="block rounded-[9px] mr-3">
            <Image src={LogoProfile} width="33" height="33"  alt="championtommyxgod"/>
            {!LogoProfile && <AvatarFallback>championtommyxgod</AvatarFallback>}
          </Avatar>
          <div className="flex flex-col w-[125px]">
            <span className="text-[11.5px] text-[#fff]">championtommyxgod</span>
            <span className="text-[10.5px] text-[#939393] -top-[51px]">Пользователь</span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              1
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

