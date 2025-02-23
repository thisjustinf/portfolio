import { Menu } from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { type FC, JSX, ReactElement } from "react";
import { ModeToggle } from "./mode-toggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
}

const Navbar: FC<NavbarProps> = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "logo",
    title: "JF"
  },
  menu = [
    { title: "About", url: "#about" },
    { title: "Skills", url: "/#skills" },
    { title: "Projects", url: "/projects" }
  ]
}: NavbarProps): ReactElement => {
  return (
    <section className="py-4 px-4">
      <nav className="hidden justify-between items-center md:flex lg:flex">
        <div className="hidden lg:flex lg:self-start">
          <Image
            className="dark:invert"
            src={logo.src}
            alt={logo.alt}
            width={64}
            height={64}
            priority
          />
        </div>
        <div id="menu" className="lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item: MenuItem): ReactElement => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="self-end">
            <ModeToggle />
          </div>
        </div>
      </nav>
      <div className="block lg:hidden">
        <div className="flex items-center justify-between">
          <a href={logo.url} className="flex items-center gap-2">
            <Image
              className="dark:invert"
              src={logo.src}
              alt={logo.alt}
              width={32}
              height={32}
              priority
            />
            <span className="text-lg font-semibold">{logo.title}</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <img src={logo.src} className="w-8" alt={logo.alt} />
                    <span className="text-lg font-semibold">{logo.title}</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="my-6 flex flex-col gap-6">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item: MenuItem) => renderMobileMenuItem(item))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem: (item: MenuItem) => ReactElement = (
  item: MenuItem
): ReactElement => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem: (item: MenuItem) => ReactElement = (
  item: MenuItem
): ReactElement => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map(
            (subItem: MenuItem): ReactElement => (
              <a
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                href={subItem.url}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            )
          )}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

export default Navbar;
