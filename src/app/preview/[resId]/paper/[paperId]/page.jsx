'use client'

import supabase from '@/configs/Database';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const Paper = ({ params }) => {

  const {resId,paperId} = params
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
    // console.log(data);
    setPaper(data[paperId]);
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4'>
      <h1>{paper.title}</h1>
    </div>
  )
}

export default Paper