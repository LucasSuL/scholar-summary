"use client";

import { Button } from "@/components/ui/button";
import supabase from "@/configs/Database";
import { useUser } from "@clerk/nextjs";
import { Copy, Edit, Loader2, Share, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/router';

const ResList = ({ params }) => {
  const { user } = useUser();
  const [resList, setResList] = useState([]);
  const id = params.resId;

  useEffect(() => {
    user && getResponses();
  }, [user]);

  const getResponses = async () => {
    let { data: responses, error } = await supabase
      .from("summary")
      .select("*")
      // Filters
      .eq("id", id)
      .eq("createBy", user?.primaryEmailAddress?.emailAddress)
      .order("created_at", { ascending: false }); 

    if (error) {
      throw error;
    }

    let data = responses[0].jsonRes;
    setResList(JSON.parse(data));
  };

  // const onDeleteForm = async (formID) => {
  //   const { error } = await supabase.from("forms").delete().eq("id", formID);
  //   if (error) {
  //     toast("There is an error, please try again later.", {
  //       description: `${new Date().toLocaleTimeString()},  ${new Date().toLocaleDateString()}`,
  //     });

  //     throw error;
  //   }
  //   toast("Your form has been deleted.", {
  //     description: `${new Date().toLocaleTimeString()},  ${new Date().toLocaleDateString()}`,
  //   });
  //   getForms();
  // };

  const handleCopyClick = (formId) => {
    navigator.clipboard.writeText(
      `lucassu-ai-form-builder.vercel.app/preview/${formId}`
    );
    toast("Live link copied.", {
      // description: `${new Date().toLocaleTimeString()},  ${new Date().toLocaleDateString()}`,
    });
  };


  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-5 mt-12 mb-32">
      {resList ? (
        resList.map((res, index) => {
          // console.log(res);
          return (
            <div
              key={index}
              className="flex flex-col gap-1 shadow-md rounded-lg border p-3 justify-between" // cursor-pointer hover:bg-gray-100 hover:shadow-lg
            >
              <div>
                <div className="flex justify-between align-middle">
                  <div></div>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      {" "}
                      <Trash2 className="h-4 w-4 text-red-600 cursor-pointer hover:scale-105" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your form and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            // onDeleteForm(formID);
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <p className="font-medium">{res.title}</p>
                <p className="text-sm text-gray-600">{res.author}</p>
              </div>

              <div>
                <hr className="my-2"></hr>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-xs flex gap-1"
                        size="sm"
                      >
                        <Share className="h-4 w-4" />
                        Share
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>
                          Anyone who has this link will be able to view this.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                          <Label htmlFor="link" className="sr-only">
                            Link
                          </Label>
                          <Input
                            id="link"
                            defaultValue={`lucassu-ai-form-builder.vercel.app/preview/${id}`}
                            readOnly
                          />
                        </div>
                        <Button
                          type="submit"
                          size="sm"
                          className="px-3"
                          onClick={() => handleCopyClick(id)}
                        >
                          <span className="sr-only">Copy</span>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Link href={`/preview/${id}/paper/${index}`}>
                    <Button
                      className="text-xs flex gap-1"
                      size="sm"
                      // onClick={() => handleViewClick(res, index)}
                    >
                      <Edit className="h-4 w-4" />
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <Loader2 />
          Please wait...
        </div>
      )}
    </div>
  );
};

export default ResList;
