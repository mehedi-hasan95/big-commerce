import { Logo } from "./logo";
import { SearchBar } from "./search";
import { Account } from "./top-bar/account";
import { Cart } from "./top-bar/cart";

export const Header = () => {
  return (
    <header className="bg-slate-100 py-2">
      <div className="flex justify-between items-center container mx-auto px-6 xl:max-w-screen-3xl">
        <Logo />
        <SearchBar />
        <div className="flex gap-3 items-center">
          <Account />
          <Cart />
        </div>
      </div>
    </header>
  );
};
