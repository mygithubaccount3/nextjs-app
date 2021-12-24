import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "All Meetups", href: "/" },
  { name: "Add New Meetup", href: "/new-meetup" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MainNavigation() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-[#77002e]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center text-white font-medium">
                  React Meetups
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        aria-current={
                          router.pathname === item.href ? "page" : undefined
                        }
                      >
                        <a
                          className={classNames(
                            router.pathname === item.href
                              ? "bg-white text-[#77002e]"
                              : "bg-[#77002e] text-white hover:bg-white hover:text-[#77002e]",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  aria-current={
                    router.pathname === item.href ? "page" : undefined
                  }
                >
                  <a
                    className={classNames(
                      router.pathname === item.href
                        ? "bg-white text-[#77002e]"
                        : "bg-[#77002e] text-white hover:bg-white hover:text-[#77002e]",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default MainNavigation;
