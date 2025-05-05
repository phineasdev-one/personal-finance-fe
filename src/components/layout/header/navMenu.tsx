import { FC } from "react";
import { SheetClose } from "../../ui/sheet";
import Anchor from "./anchor";
import { pagesPath } from "@/utils/path";

type Props = {
  isSheet?: boolean;
};

const NavMenu: FC<Props> = ({ isSheet = false }) => {
  const navItems = Object.entries(pagesPath).map(([key, item]) => {
    const anchor = (
      <Anchor
        key={key}
        to={item.url}
        absolute
        activeClassName='!text-primary dark:font-medium font-semibold'
        className='flex items-center gap-1 dark:text-stone-300/85 text-stone-800'
      >
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </Anchor>
    );

    return isSheet ? (
      <SheetClose key={key} asChild>
        {anchor}
      </SheetClose>
    ) : (
      anchor
    );
  });

  return <>{navItems}</>;
};

export default NavMenu;
