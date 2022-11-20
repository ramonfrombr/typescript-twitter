import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton,
} from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className="col-span-2 mt-2 hidden px-2 lg:inline">
            <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 " />
                <input
                    className="flex-1 bg-transparent outline-none"
                    type="text"
                    placeholder="Search Twitter"
                />
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                options={{ height: 1000 }}
            />
        </div>
    );
};

export default Widgets;
