"use client";

import { useState } from "react";
import { HiHome, HiCalendar, HiTicket, HiInformationCircle, HiClipboardList, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDevMode } from '../_context/dev-mode-context';
import { KeyRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PasswordDialog from './password-dialog';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const { isDevMode, setIsDevMode } = useDevMode();
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: HiHome },
    { name: "Calendar", href: "/calendar", icon: HiCalendar },
    { name: "Box Office", href: "/box-office", icon: HiTicket },
    { name: "Visitor Information", href: "/visitor-information", icon: HiInformationCircle },
    { name: "Event Planner", href: "/event-planner", icon: HiClipboardList }
  ];

  const handlePasswordConfirm = () => {
    setIsDevMode(true);
    setIsPasswordDialogOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/1413/1413003.png"
                alt="Event Platform Logo"
              />
            </Link>
          </div>

          <div className="hidden sm:flex sm:justify-center sm:flex-1 sm:ml-20">
            <div className="flex justify-between space-x-16">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out ${
                    pathname === item.href
                      ? "text-blue-600 bg-gray-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  aria-label={item.name}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      pathname === item.href
                        ? "text-blue-500"
                        : "text-gray-400 group-hover:text-blue-500"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4 hidden lg:flex">
            {!isDevMode && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPasswordDialogOpen(true)}
                className="h-8 w-8"
                title="Developer Mode"
              >
                <KeyRound className="h-4 w-4 text-gray-500" />
              </Button>
            )}
            {isDevMode && (
              <div className="bg-yellow-100 px-3 py-1 rounded-full text-sm text-yellow-800 flex items-center">
                Dev Mode
              </div>
            )}
          </div>

          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="h-6 w-6 text-gray-700" /> : <HiMenu className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-4 pb-3 space-y-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group w-full flex items-center px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ease-in-out ${
                  pathname === item.href
                    ? "text-blue-600 bg-gray-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                aria-label={item.name}
                onClick={() => setIsOpen(false)}
              >
                <item.icon
                  className={`mr-4 h-6 w-6 ${
                    pathname === item.href
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-blue-500"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-semibold">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <PasswordDialog
        isOpen={isPasswordDialogOpen}
        onClose={() => setIsPasswordDialogOpen(false)}
        onConfirm={handlePasswordConfirm}
        title="Enter Developer Password"
      />
    </header>
  );
}
