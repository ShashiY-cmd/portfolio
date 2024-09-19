import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navigationItems } from "./Navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function MobileMenu() {
  const location = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className=" mt-5 flex px-2 space-y-1 flex-col ">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                location === item.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
                "group flex items-center px-2 py-2 text-md font-semibold rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit"> Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
