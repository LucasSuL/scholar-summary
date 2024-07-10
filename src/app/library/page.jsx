"use client";

import React, { useEffect, useState } from "react";
import books from "../_data/books.js";
import Image from "next/image";
import Link from "next/link.js";
import { chatSession } from "@/configs/AiModal.js";

const PROMPT =
  // ". Based on the 'Paper', give me the following in json format: title, author, publish-date, DOI, abstract of the paper, a 200 words summary, a harvard style reference, a harvard style in-text referecne, a link to the paper, and a pdf download link.";
  ". Based on the 'Paper', give me the following in json format: paper title, authors, a 200 words summary";

const Library = () => {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch("/api/readFile");
        const data = await response.json();
        if (response.ok) {
          setFileContent(data.content);
        } else {
          console.error("Error fetching file content:", data.error);
        }
      } catch (error) {
        console.error("Error fetching file content:", error);
      }
    };

    fetchFileContent();
  }, []);

  useEffect(() => {
    const getSum = async () => {
      if (fileContent) {
        // console.log(fileContent);
        try {
          const result = await chatSession.sendMessage(
            "Paper:" + fileContent + PROMPT
          );
          console.log(result.response.text());
        } catch (error) {
          console.error("Error sending message to chat session:", error);
        }
      }
    };

    getSum();
  }, [fileContent]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4 my-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
        {books.map((book, index) => (
          <div key={index}>
            <Link
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
              <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-25 "></div>
            </Link>
            <p className="text-sm mt-2 font-bold">{book.title}</p>
            <p className="text-sm cursor-pointer hover:underline hover:underline-offset-2">
              {book.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
