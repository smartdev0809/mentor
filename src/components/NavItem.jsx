import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const NavItem = ({ isAnyOpen, category, handleOpen, close, isOpen }) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <button
          className={`gap-1.5 ${isOpen ? 'btn-secondary' : 'btn-ghost'}`}
          onClick={handleOpen}
        >
          {category.label}
          <ChevronDown
            className={`h-4 w-4 transition-all text-muted-foreground ${
              isOpen && "-rotate-180"
            }`}
          />
        </button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={`absolute inset-x-0 top-full text-sm text-muted-foreground ${
            !isAnyOpen && "animate-in fade-in-10 slide-in-from-top-5"
          }`}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-6 gap-x-8">
                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                          src={item.imageSrc}
                          fill
                          alt="product category image"
                          className="object-cover object-center"
                        />
                      </div>

                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Try now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
