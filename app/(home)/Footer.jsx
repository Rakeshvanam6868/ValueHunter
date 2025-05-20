"use client"
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandTelegram,
    IconBrandWhatsapp,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";


export default function Footer() {
    const links = [
        {
            title: "WhatsApp",
            icon: (
                <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Telegram",
            icon: (
                <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <>
            <nav className="w-full backdrop-blur-md bg-gradient-to-r from-[#d4e0e6] to-[#e9dbdb] dark:from-[#141a1d] dark:to-[#0e0d0d] border-b border-border">
                <div className="grid grid-cols-[40%_60%] ">
                    <div className="py-10 pl-20 flex flex-col items-start gap-5 ">
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

                        <div className="-ml-3 h-[30px] bg-none">
                            <FloatingDock mobileClassName="translate-y-20" // only for demo, remove for production
                                items={links} />
                        </div>

                        <div className="pt-5 w-[70%]">
                            ValueHunter is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in
                        </div>



                    </div>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col gap-3">
                           <h6>Product</h6>
                           <p>Home</p>
                           <p>Advisable</p>
                           <p>Promotions</p>
                        </div>
                        <div className="flex flex-col gap-3">
                           <h6>Product</h6>
                           <p>Home</p>
                           <p>Advisable</p>
                           <p>Promotions</p>
                        </div>
                        <div className="flex flex-col gap-3">
                           <h6>Product</h6>
                           <p>Home</p>
                           <p>Advisable</p>
                           <p>Promotions</p>
                        </div>
                    </div>
                </div>
                <div className=" text-center w-full">
                    <hr className="h-[1px] text-white" />
                    <p className="py-3">{`© ${new Date().getFullYear()} ValueHunter. All rights reserved. `}</p>             
                </div>
            </nav>
        </>
    );
}