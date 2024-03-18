import Image from "next/image";
import { HeaderNavigationMenu } from "./navigation.header";
import ThemeSwitcher  from "../themeSwitcher";
import { Logo } from "@images";
import Bell from "../notifications/notification.bell";
import Messages from "../notifications/notification.message";
import { Separator } from "../../ui/separator";
import Profile from "../notifications/notification.profile";

export const Header = () => {

  return(
  <div className="container flex flex-col my-[30px] mb-[47px]">
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <Image src={Logo} className="w-[40px] h-[40px] mr-[20px]" alt="logo"/> 
          <div>Добро пожаловать, championtommyxgod!</div>
        </div>
        <div className="flex flex-row items-center gap-[10px]">
          <ThemeSwitcher/>
          <Bell/>
          <Messages/>
          <Separator orientation="vertical" className="h-[40px] mx-4" />
          <Profile/>
        </div>

      </div>
      <HeaderNavigationMenu />
  </div>
  );
}
