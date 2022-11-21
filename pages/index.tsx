import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { Toaster } from "react-hot-toast";

interface HomeProps {
    tweets: Tweet[];
}

const Home: NextPage<HomeProps> = ({ tweets }) => {
    console.log(tweets);

    return (
        <div className="mx-auto max-h-screen lg:max-w-6xl">
            <Head>
                <title>
                    Twitter Clone - built with TypeScript, React, NextJS &
                    TailwindCSS
                </title>
            </Head>

            <Toaster />

            <main className="grid grid-cols-9">
                <Sidebar />

                <Feed tweets={tweets} />

                <Widgets />
            </main>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const tweets = await fetchTweets();

    return {
        props: {
            tweets,
        },
    };
};
