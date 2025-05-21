"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { ModeToggle } from "@/components/Toggle";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-[#d4e0e6] to-[#e9dbdb] dark:from-[#141a1d] dark:to-[#0e0d0d] border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always Visible */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <p className="text-xl font-bold">VALUE HUNTER</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Menubar className="bg-transparent space-x-6 text-xl -ml-24 font-bold">
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <a href="/" className="cursor-pointer hover:text-primary transition-colors">
                    Home
                  </a>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <a href="/deals" className="cursor-pointer hover:text-primary transition-colors">
                    Deals
                  </a>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <a href="/blogs" className="cursor-pointer hover:text-primary transition-colors">
                    Blogs
                  </a>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <a href="/contact" className="cursor-pointer hover:text-primary transition-colors">
                    Contact
                  </a>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* Only show ModeToggle on desktop */}
            <div className="hidden md:block">
              <ModeToggle />
            </div>

            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>

                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png " />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => console.log("Light theme")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => console.log("Dark theme")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => console.log("System theme")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-2">
                  {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-3/4 sm:max-w-sm p-6">
                <nav className="flex flex-col gap-6 mt-6">
                  <a href="/" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="/deals" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-primary transition-colors">
                    Deals
                  </a>
                  <a href="/blogs" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-primary transition-colors">
                    Blogs
                  </a>
                  <a href="/contact" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-primary transition-colors">
                    Contact
                  </a>
                  <div className="mt-6 pt-6 border-t border-border flex flex-col gap-4">
                    {/* Theme Toggle inside Sheet for Mobile */}
                    <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted ">
                      <ModeToggle />
                      <p className="">Theme</p>
                    </div>

                    {/* Avatar + Profile Dropdown inside Sheet */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png " />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <span>Profile</span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem onClick={() => console.log("Light theme")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("Dark theme")}>
                          Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("System theme")}>
                          System
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}