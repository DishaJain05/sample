'use client';
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

export default function Navbar() {
    const departments = ["CSE", "IT", "ECE"];
    
    return (
        <div className="navbar">
            <NavigationMenu className="navigation-menu">
                <NavigationMenuList className="navigation-menu-list">
                    <NavigationMenuItem asChild>
                        <a href="/">Home</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild>
                        <a href="/students">Students</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild>
                        <a href="/branches">Branches</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild>
                        <a href="/about">About Us</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild>
                        <a href="/contact">Contact Us</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="navigation-menu-item">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <NavigationMenuTrigger className="dropdown-trigger">
                                    Departments
                                </NavigationMenuTrigger>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="dropdown-menu-content">
                                {departments.map((dept, index) => (
                                    <DropdownMenuItem key={index} className="dropdown-menu-item" asChild>
                                        <a href={`/departments/${dept.toLowerCase()}`}>{dept}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild>
                        <a href="/login">Login</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem asChild>
                        <a href="/signup">Sign Up</a>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
