const processFilesAndUpdateBooks = async () => {
  if (files.length > 0) {
    try {
      for (let file of files) {
        const title = parseFileName(file.fileName);
        const content = file.content;

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

            const resJson = JSON.parse(jsonStr);

            console.log("Response JSON:", resJson);

            setIsGen(false);

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

              const jsonData = JSON.stringify(localBooks, null, 2);
              writeDataToFile(jsonData);
            }

            // Adding a 10-second delay before proceeding to the next file
            await new Promise(resolve => setTimeout(resolve, 10000));

          } catch (error) {
            console.error("Error processing file:", file, error);
          }
        }
      }
      console.log("generating complete..");
    } catch (error) {
      console.error("Error processing files:", error);
    }
  }
};