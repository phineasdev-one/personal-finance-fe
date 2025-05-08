import LeftBar from "./leftBar";
import NavMenu from "./navMenu";
import Logo from "./logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  return (
    <nav className='w-full border-b h-16 sticky top-0 z-50 bg-background'>
      <div className='sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2'>
        <div className='flex items-center gap-5'>
          <LeftBar />
          <div className='flex items-center gap-6'>
            <div className='sm:flex hidden'>
              <Logo />
            </div>
            <div className='md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground'>
              <NavMenu />
            </div>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            {/* <Search tags={response ?? []} /> */}
            <div className='flex ml-2.5 sm:ml-0 gap-4'>
              <Label>Welcome back, Anh</Label>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-40'>
                  <DropdownMenuItem>Setting</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* <ModeToggle /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
