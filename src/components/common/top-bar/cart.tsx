import { ShoppingCart } from "lucide-react";

export const Cart = () => {
  return (
    <div className="flex items-end text-xs relative cursor-pointer">
      <ShoppingCart />
      <span className="absolute -top-1 -right-1 bg-primary text-white w-4 h-4 flex justify-center items-center rounded-full">
        2
      </span>
    </div>
  );
};
