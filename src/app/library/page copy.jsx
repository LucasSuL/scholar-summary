"use client";

import React, { useEffect, useState } from "react";
import books from "../_data/books.js";
import Image from "next/image";
import Link from "next/link.js";
import { chatSession } from "@/configs/AiModal.js";
import { parseFileName, random } from "@/lib/utils.js";
import { extractJsonString } from "../utils/parseGeminiJson.js";
import { writeDataToFile } from "../api/readFile/route.js";

const PROMPT =
  ". Based on the Paper, return the json, including 'authors', 'publish date', 'DOI', 'abstract', a 200 words summary of the whole papar, a harvard style reference, a harvard style in-text reference.";
// "Based on the Paper, summarize it.";

const Library = () => {
  const [files, setFiles] = useState([]);
  const [localBooks, setLocalBooks] = useState(books);
  const [isGen, setIsGen] = useState(false);

  useEffect(() => {
    const fetchFilesContent = async () => {
      try {
        const response = await fetch("/api/readFile"); // 修改成新的 API endpoint
        const data = await response.json();
        if (response.ok) {
          setFiles(data.files); // 设置所有文件的内容到 state 中
        } else {
          console.error("Error fetching files:", data.error);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFilesContent();
  }, []);

  useEffect(() => {
    files && processFilesAndUpdateBooks();
  }, [files]);

  const processFilesAndUpdateBooks = async () => {
    if (files.length > 0) {
      try {
        for (let file of files) {
          const title = parseFileName(file.fileName);
          const content = file.content;
          // console.log("content: " + content);

          console.log("start generating..." + title);

          let resText = "";
          setIsGen(true);

          if (content) {
            try {
              const res = await chatSession.sendMessageStream(
                "Paper:" + content + PROMPT
              );

              for await (const item of res.stream) {
                resText += item.candidates[0].content.parts[0].text;
              }

              const jsonStr = extractJsonString(resText);

              // const resJson = JSON.parse(jsonStr);

              console.log("Response JSON:", jsonStr);

              setIsGen(false);
              // Check if title already exists in updatedBooks
              if (!isGen && !localBooks.some((book) => book.title === title)) {
                console.log("pushing book: " + title);
                setLocalBooks((prevBooks) => [
                  ...prevBooks,
                  {
                    cover: `/book-covers/bc${random(0, 12)}.png`, // Dynamic cover path
                    title: title,
                    resJson: resJson,
                  },
                ]);
              }
            } catch (error) {
              console.error("Error processing file:", file, error);
            }
          }

          setTimeout(() => {
            
          }, 60000);
        }

        console.log("generating complete..");

        //next step
        const jsonData = JSON.stringify(localBooks, null, 2);
        writeDataToFile(jsonData);
      } catch (error) {
        console.error("Error processing files:", error);
      }
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4 my-16">
      <div className="grid grid-cols-2  md:grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-8">
        {localBooks.map((book, index) => (
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
