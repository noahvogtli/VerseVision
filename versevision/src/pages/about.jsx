import React from "react";
import { LuBook, LuSearch, LuMessageSquareMore, LuArrowRight, LuHeart } from "react-icons/lu";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function About() {
    return (
        <div className="flex flex-col items-center px-4 md:px-8 pb-20">

            {/* Hero */}
            <div className="flex flex-col items-center text-center mt-10 md:mt-14 mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">About VerseVision</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
                    Built for people who want to<br className="hidden md:block" /> actually understand the Bible
                </h1>
                <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                    Not just read it — but really get it. The history behind it, the meaning of a verse, why a passage was written, and what it means for everyday life.
                </p>
            </div>

            {/* Story Section */}
            <div className="w-full border border-gray-200 rounded-xl p-8 md:p-12 mb-8 bg-gray-50">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">The story</p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">Why I built this</h2>
                <div className="grid md:grid-cols-2 gap-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    <p>
                        I grew up going to church, hearing verses read aloud, and nodding along — but honestly, a lot of it didn't fully click. The language felt distant, the cultural references were foreign, and nobody really explained the <em>why</em> behind what was being read.
                    </p>
                    <p>
                        VerseVision is what I wish existed back then. A place where you can type in any Bible verse — from Genesis to Revelation — and get a real explanation: the historical context, what the original language actually means, how it connects to the rest of Scripture, and why it still matters today.
                    </p>
                </div>
            </div>

            {/* What It Does */}
            <div className="w-full mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4 text-center">What you can do</p>
                <div className="flex flex-col md:flex-row w-full gap-3">
                    <Card className="md:w-[33%] text-left border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                                <LuSearch size={20} />
                            </div>
                            <CardTitle className="text-base font-semibold">Look up any verse</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Search any Bible verse and get a breakdown of its meaning, the cultural background, and cross-references to related Scripture passages.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="md:w-[33%] text-left border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                                <LuMessageSquareMore size={20} />
                            </div>
                            <CardTitle className="text-base font-semibold">Ask real questions</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Type questions the way you'd actually ask them — "What does it mean to turn the other cheek?" or "Why did God ask Abraham to sacrifice Isaac?" No Sunday school filter needed.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="md:w-[33%] text-left border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                                <LuBook size={20} />
                            </div>
                            <CardTitle className="text-base font-semibold">Daily verse to reflect on</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Start each day with a verse and a short reflection. A small, consistent habit that builds a deeper familiarity with Scripture over time.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Who It's For */}
            <div className="w-full border border-gray-200 rounded-xl p-8 md:p-12 mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">Who this is for</p>
                <h2 className="text-2xl font-semibold mb-6">Everyone is welcome here</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <p className="font-medium text-sm mb-2">New to the Bible</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Never read it before? That's completely fine. Start anywhere — there's no wrong entry point, and nothing is assumed.</p>
                    </div>
                    <div>
                        <p className="font-medium text-sm mb-2">Lifelong believers</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Even if you've read the same passage a hundred times, the historical and linguistic context often reveals something new.</p>
                    </div>
                    <div>
                        <p className="font-medium text-sm mb-2">Curious and skeptical</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Just wondering what the Bible actually says — or why people find it meaningful? Explore it on your own terms, without any pressure.</p>
                    </div>
                </div>
            </div>

            {/* Personal Note + CTA */}
            <div className="w-full border border-gray-200 rounded-xl p-8 md:p-12 mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gray-50">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <LuHeart size={16} className="text-gray-400" />
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">A personal note</p>
                    </div>
                    <p className="text-xl md:text-2xl font-semibold mb-2 max-w-xl">This is a free resource — and it always will be.</p>
                    <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
                        I built VerseVision because I believe Scripture should be accessible to everyone, not just people with seminary degrees. If it helps even one person understand the Bible a little better, it was worth building.
                    </p>
                </div>
                <a
                    href="/chat"
                    className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-black/80 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                    Start reading <LuArrowRight size={16} />
                </a>
            </div>

        </div>
    );
}

export default About;