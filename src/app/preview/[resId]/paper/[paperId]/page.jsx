"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import supabase from "@/configs/Database";
import { useUser } from "@clerk/nextjs";
import { Copy, Download, ExternalLink, Share, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Paper = ({ params }) => {
  const { resId, paperId } = params;
  const { user } = useUser();
  const [paper, setPaper] = useState([]);

  useEffect(() => {
    user && getResponses();
  }, [user]);

  const getResponses = async () => {
    let { data: responses, error } = await supabase
      .from("summary")
      .select("*")
      // Filters
      .eq("id", resId)
      // .eq("createBy", user?.primaryEmailAddress?.emailAddress)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    let data = JSON.parse(responses[0].jsonRes);
    console.log(data[paperId]);
    setPaper(data[paperId]);
  };

  const handleCopyClick = (citation) => {
    navigator.clipboard.writeText(citation);
    toast("Link copied.", {
      description: `${new Date().toLocaleTimeString()},  ${new Date().toLocaleDateString()}`,
    });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4 my-16">

      <Image src="https://source.unsplash.com/random/200x300" alt="random Image"  width={150} height={150}></Image>

      <h1 className="text-3xl font-bold">{paper.title}</h1>
      <div className="flex gap-2 mt-3">
        <p className=" text-gray-500">{paper.author}</p>
        <p className="text-gray-500">{paper.publishDate}</p>
      </div>
      <p className="text-gray-500">DOI: {paper.DOI}</p>

      <div className="mt-4 flex gap-2">
        <a
          href={paper.pdfDownloadLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex gap-1 p-1  px-3" size="xs">
            <Download className="w-5 h-5" /> Download PDF
          </Button>
        </a>

        <a href={paper.link} target="_blank" rel="noopener noreferrer">
          <Button className="flex gap-1 p-1 px-3" size="xs">
            <ExternalLink className="w-5 h-5" /> Link
          </Button>
        </a>
      </div>

      <div className="mt-5">
        <h3 className="font-bold text-lg mb-1">Summary</h3>
        {paper.summary}
      </div>

      <div className="mt-5">
        <h3 className="font-bold text-lg mb-1">In-Text Reference</h3>
        <div className="flex items-center space-x-2">
          <Button
            type="submit"
            size="xs"
            className="bg-light text-orange-500 m-0 p-0 hover:bg-orange-100"
            onClick={() => handleCopyClick(paper.inTextReference)}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-5 w-5" />
          </Button>
          <div className="">{paper.inTextReference}</div>
        </div>
      </div>
      
      <div className="mt-5">
        <h3 className="font-bold text-lg mb-1">Full Reference</h3>
        <div className="flex gap-2 items-start">
          <Button
            type="submit"
            size="xs"
            className="bg-light text-orange-500 m-0 p-0 hover:bg-orange-100"
            onClick={() => handleCopyClick(paper.harvardReference)}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-5 w-5" />
          </Button>
          <div className="m-0">{paper.harvardReference}</div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
