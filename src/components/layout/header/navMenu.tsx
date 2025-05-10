import { FC } from "react";
import { SheetClose } from "../../ui/sheet";
import Anchor from "./anchor";
import { pagesPath } from "@/utils/path";

type Props = {
  isSheet?: boolean;
};

const paths = [
  { name: "Transaction", url: pagesPath.tranasction.url },
  { name: "Tracking", url: "/tracking" },
];

const NavMenu: FC<Props> = ({ isSheet = false }) => {
  const navItems = paths.map((item) => {
    const anchor = (
      <Anchor
        key={item.name}
        to={item.url}
        absolute
        activeClassName='!text-primary dark:font-medium font-semibold'
        className='flex items-center gap-1 dark:text-stone-300/85 text-stone-800'
      >
        {item.name}
      </Anchor>
    );

    return isSheet ? (
      <SheetClose key={item.name} asChild>
        {anchor}
      </SheetClose>
    ) : (
      anchor
    );
  });

  return <>{navItems}</>;
};

export default NavMenu;
