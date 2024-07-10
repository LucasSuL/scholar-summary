import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const txtFolderPath = path.join(process.cwd(), 'public', 'papers', 'txt');

  try {
    // 读取文件夹中的所有文件名
    const fileNames = fs.readdirSync(txtFolderPath);

    // 存储所有文件内容的数组
    const filesContent = [];

    // 遍历每个文件名，读取文件内容并存入数组
    fileNames.forEach(fileName => {
      const filePath = path.join(txtFolderPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      filesContent.push({ fileName, content: fileContent });
    });

    return new Response(JSON.stringify({ files: filesContent }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error reading files' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
