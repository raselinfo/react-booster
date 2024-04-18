"use client";
import { Phone, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";

const getRestaurant = () => {
  return [
    {
      id: 1,
      name: "Cheesy Delight",
    },
    {
      id: 2,
      name: "Pizza Hut",
    },
    {
      id: 3,
      name: "Kids Corner",
    },
  ];
};

const TopNavigation: FC = () => {
  return (
    <nav className="container flex items-center justify-between py-5 flex-wrap gap-5">
      <div className="flex items-center gpa-4 flex-wrap ">
        <Image
          src={
            "https://utfs.io/f/f0cadbd1-f2ba-4e4e-b6dd-57ddc9185c54-1zbfv.svg"
          }
          width={0}
          height={0}
          alt="food-z"
          className="w-[100px]"
        />
        <Select>
          <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select a Restaurant" />
          </SelectTrigger>
          <SelectContent>
            {getRestaurant().map((restaurant) => {
              return (
                <SelectItem
                  key={restaurant.id}
                  value={restaurant.name.split(" ").join("-")}
                >
                  {restaurant.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center flex-wrap gap-10">
        <ul className="flex items-center space-x-4 font-medium">
          <li>
            <Link className="hover:text-primary" href={"/"}>
              Menu
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" href={"/orders"}>
              Orders
            </Link>
          </li>
          <li className="relative">
            <Link className="hover:text-primary" href={"/cart"}>
              <ShoppingBasket />
            </Link>
            <span className="absolute -right-3 -top-4  flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-secondary">
              3
            </span>
          </li>
        </ul>
        <ul className="flex items-center gap-4 flex-wrap font-medium">
          <li>
            <div className="flex space-x-1">
              <span>
                <Phone />
              </span>
              <span>+91 9800 098 998</span>
            </div>
          </li>
          <li>
            <Button>Logout</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
