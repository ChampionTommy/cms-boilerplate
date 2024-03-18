"use client"
import { Icon20MessageRectangleOutline } from "@vkontakte/icons"
import { Button } from "../../ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover"

export default function Messages() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline"><Icon20MessageRectangleOutline/></Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" >
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

