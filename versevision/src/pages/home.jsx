import React from "react";
import { LuBook, LuLightbulb, LuMessageSquareMore, LuArrowRight } from "react-icons/lu";
import logo from '../assets/NormalLogo.png';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Home(props) {


    return (
        <div className="flex flex-col items-center text-center px-4 md:px-8">

            {/* Hero */}
            <div className="flex flex-col items-center mt-10 md:mt-8 mb-16 md:mb-24">
                <img src={logo} alt="VerseVision Logo" className="w-50 md:w-65 mb-6 opacity-100" />
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-none">VerseVision</h1>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-10 bg-gray-300" />
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
                        Explore Scripture with clarity and care
                    </p>
                    <div className="h-px w-10 bg-gray-300" />
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-xl">
                    A simple, thoughtful way to spend time in the Bible. Read a daily verse, ask questions in plain language, and understand the context and meaning behind what you read.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col md:flex-row w-full gap-3 mb-20">
                <Card className="md:w-[33%] text-left border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                    <CardHeader className="pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <LuBook size={20} />
                        </div>
                        <CardTitle className="text-base font-semibold">Daily Inspiration</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                        <p className="text-sm text-gray-500 leading-relaxed">Begin with the verse of the day to reflect on and share with others.</p>
                    </CardContent>
                </Card>

                <Card className="md:w-[33%] text-left border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                    <CardHeader className="pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <LuLightbulb size={20} />
                        </div>
                        <CardTitle className="text-base font-semibold">Study Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                        <p className="text-sm text-gray-500 leading-relaxed">Clear explanations and helpful context for deeper, more confident reading.</p>
                    </CardContent>
                </Card>

                <Card className="md:w-[33%] text-left border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                    <CardHeader className="pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <LuMessageSquareMore size={20} />
                        </div>
                        <CardTitle className="text-base font-semibold">Guided Conversation</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                        <p className="text-sm text-gray-500 leading-relaxed">Ask in your own words and receive concise, trustworthy answers.</p>
                    </CardContent>
                </Card>
            </div>

            {/* CTA Banner */}
            <div className="w-full border border-gray-200 rounded-xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50">
                <div className="text-left">
                    <p className="text-xl md:text-2xl font-semibold mb-1">Ready to begin?</p>
                    <p className="text-sm text-gray-500">Start with today's verse and go from there.</p>
                </div>
                <a
                    href="/chat"
                    className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-black/80 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                    Open the Bible <LuArrowRight size={16} />
                </a>
            </div>

        </div>
    );
}

export default Home;