import { Logo } from "./logo";
import { SearchBar } from "./search";
import { Cart } from "./top-bar/cart";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <SearchBar />
      <div className="flex gap-3 items-center">
        <Cart />
      </div>
    </header>
  );
};
