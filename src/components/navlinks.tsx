"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/Tops",
    description:
      "Get in on the cool stuff.A collection of beautifull tops to help you look and feel your best.",
  },
  {
    title: "Pants",
    href: "/Pants",
    description:
      "Get in on the cool stuff.A collection of stylish pants to help you look and feel your best.",
  },
  {
    title: "Shoes",
    href: "/Shoes",
    description:
      "Get in on the cool stuff.A collection of stylish shoes to help you look and feel your best.",
  },
  {
    title: "Accessories/Jewelery",
    href: "/Accessories",
    description:
      "Get in on the cool stuff.A collection of beautifull Accessories and jewelery to help you look and feel your best.",
  },
  
]

  function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
       
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-mywhite ">
              {components.map((component) => (
                <Link
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  legacyBehavior
                  passHref
                >
                  <ListItem  title={component.title}>
                  {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/aboutUs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <Link href={'#'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none text-base no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myOrange">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-myblack">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  )
})
ListItem.displayName = "ListItem"
export default NavigationMenuDemo

