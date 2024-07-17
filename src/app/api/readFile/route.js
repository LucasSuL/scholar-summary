"use server";

import path from "path";
import fs from "fs";

export async function GET(request) {
  const txtFolderPath = path.join(process.cwd(), "public", "papers", "test");

  try {
    // 读取文件夹中的所有文件名
    const fileNames = fs.readdirSync(txtFolderPath);

    // 存储所有文件内容的数组
    const filesContent = [];

    // 遍历每个文件名，读取文件内容并存入数组
    fileNames.forEach((fileName) => {
      const filePath = path.join(txtFolderPath, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      filesContent.push({ fileName, content: fileContent });
    });

    return new Response(JSON.stringify({ files: filesContent }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error reading files" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// 写入数据到 books.txt 的函数
export async function writeDataToFile(data) {
  const filePath = path.join(process.cwd(), "src", "app", "_data", "books.txt");
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(filePath, jsonData, "utf8", (err) => {
    if (err) {
      console.error("写入文件时出错：", err);
      return;
    }
    console.log("数据已成功写入文件：", filePath);
  });
}
