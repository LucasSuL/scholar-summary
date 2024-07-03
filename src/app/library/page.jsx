import React from "react";
import books from "../_data/books.js";
import Image from "next/image";
import Link from "next/link.js";

const Library = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4 my-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
          {books.map((book, index) => (
            <Link
              key={index}
              className="group relative block overflow-hidden rounded-lg"
              href={`/library/${index}`}
            >
              <Image
                src={book.cover}
                alt="book-cover"
                width={200}
                height={300}
                className=" w-full object-cover transition duration-500 group-hover:scale-105  "
              ></Image>
              <div class="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-25 "></div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
