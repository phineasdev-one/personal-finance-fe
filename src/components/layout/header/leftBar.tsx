import { Button } from "../../ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../../ui/sheet";
import { AlignLeftIcon } from "lucide-react";
import { DialogTitle } from "../../ui/dialog";
import NavMenu from "./navMenu";
import Logo from "./logo";

const LeftBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden flex'>
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-4 px-0' side='left'>
        <DialogTitle className='sr-only'>Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className='px-5' asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className='flex flex-col gap-4 overflow-y-auto'>
          <div className='flex flex-col gap-2.5 mt-3 mx-2 px-5'>
            <NavMenu isSheet />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LeftBar;
