import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import TweetComponent from "./Tweet";
import Tweetbox from "./Tweetbox";
import toast from "react-hot-toast";

interface FeedProps {
    tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProp }: FeedProps) => {
    const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

    console.log(tweets);

    const handleRefresh = async () => {
        const refreshToast = toast.loading("Refreshing...");
        const tweets = await fetchTweets();
        setTweets(tweets);

        toast.success("Feed Updated!", { id: refreshToast });
    };

    return (
        <div className="col-span-7 border-x lg:col-span-5">
            <div className="flex items-center justify-between">
                <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
                <ArrowPathIcon
                    onClick={handleRefresh}
                    className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
                />
            </div>

            {/* Tweetbox */}

            <div>
                <Tweetbox setTweets={setTweets} />
            </div>

            <div>
                {tweets.map((tweet) => (
                    <TweetComponent key={tweet._id} tweet={tweet} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
