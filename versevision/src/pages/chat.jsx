import { Button } from "@/components/ui/button"
import React, { useState, useRef, useEffect } from 'react';
import { encode } from "@toon-format/toon";
import { supabase } from "../supabaseclient";
import ReactMarkdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from '../assets/NormalLogo.png';


function Chat() {
    const [query, setQuery] = useState('');
    const [length, setLength] = useState(0);
    const [messages, setMessages] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const chatContainerRef = useRef(null);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const [displayName, setDisplayName] = React.useState('');

    React.useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) console.error(error);
            const name = data.user?.user_metadata?.display_name || '';
            setDisplayName(name);
            setMessages([{ type: 'assistant', content: `Welcome to VerseVision, ${name.split(' ')[0]}! Ask me any questions you have about faith or the Bible.` }]);
        };
        fetchUser();
    }, []);
    
    useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
}, [messages]);

    const handleUpdate = (e) => {
        setQuery(e.target.value);
        if(e.target.value.length > 200) {
            setLength(true);
            document.getElementById('submit-btn').disabled = true;
        } else {
            setLength(false);
            document.getElementById('submit-btn').disabled = false;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!query.trim() || isSubmitting || query.length > 200) return;
        setIsSubmitting(true);
        const userMessage = query.trim();
        setQuery('');

        const trimmedHistory = history.length > 10 ? history.slice(-10) : history;

        setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

        try {
            const res = await fetch('http://localhost:3001/api/chat', {
                // localhost:3001/api/chat
                // https://versevision.onrender.com/api/chat
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    history: trimmedHistory
                }),
            });
            if (!res.ok) {
                throw new Error('Failed to get response');
            }
            const data = await res.json();
            setMessages(prev => [...prev, { type: 'assistant', content: data.reply }]);
            setHistory([...trimmedHistory, { type: 'user', content: userMessage }, { type: 'assistant', content: data.reply }]);
        } catch (e) {
            console.error("❌ Error sending message to server:", e);
        } finally {
            setIsSubmitting(false);
            setLoading(false);
        }
    };


    return (
            <div className="w-full max-h-[100dvh] mx-auto text-center p-4 mt-10 flex flex-col items-center">
            <div className="h-[70dvh] md:h-[75dvh] md:w-[85dvw] border rounded-xl p-4 mb-4 mt-4 overflow-y-auto " id="chat-container" ref={chatContainerRef}>
                <div className="mt-10"></div>
                {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                >
                    <Avatar size="lg" className={msg.type === 'user' ? 'hidden' : 'hidden md:block md:mr-2'}>
                    <AvatarImage src={logo} className="scale-75" />
                    <AvatarFallback className="text-black bg-white">V</AvatarFallback>
                    </Avatar>
                    <div
                    className={`px-4 py-3 rounded-2xl max-w-[75%] break-words  text-sm md:text-md ${
                        msg.type === 'user'
                        ? 'bg-black text-white text-right'
                        : 'bg-white-200 text-black border border-gray-300 text-left'
                    }`}
                    >
                    <ReactMarkdown
                    components={{
                        strong: ({children}) => <strong className="block mt-4 mb-1 font-semibold text-sm md:text-md">{children}</strong>,
                        h1: ({children}) => <p className="font-semibold mt-4 mb-1 text-sm md:text-md">{children}</p>,
                        h2: ({children}) => <p className="font-semibold mt-4 mb-1 text-sm md:text-md">{children}</p>,
                        h3: ({children}) => <p className="font-semibold mt-4 mb-1 text-sm md:text-md">{children}</p>,
                        p: ({children}) => <p className="text-sm md:text-md">{children}</p>,
                    }}
                    >
                    {msg.content}
                    </ReactMarkdown>

                    </div>
                </div>
                ))}
                {isSubmitting && (
                    <div className="flex justify-start mb-2">
                        <div className="px-4 py-2 rounded-2xl border border-gray-300 text-sm text-gray-400">
                            Loading...
                        </div>
                    </div>
                )}
            </div>
            <div className="w-[90dvw] md:w-[85dvw] border-t border-gray-300 pt-4 flex flex-col">
                <form onSubmit={handleSubmit} className="flex w-[90dvw] md:w-[85dvw]">
                    <textarea className="border border-gray-500 w-[70%] md:w-[90%] resize-none rounded-xl content-center pl-5" placeholder="Ask anything..." value={query} onChange={(e) => handleUpdate(e)} onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (!isSubmitting) handleSubmit(e);
                }}}></textarea>
                    <button type="submit" disabled={length || isSubmitting} className={`block border border-black w-[30%] md:w-[10%] ml-2 rounded-xl text-white transition-colors duration-100 ${length || isSubmitting ? 'bg-black/80 cursor-not-allowed' : 'bg-black active:bg-black/70 hover:cursor-pointer'}`}>Send</button>
                </form>
                
                <div className={`flex justify-end ${length ? 'text-red-500' : 'text-black'}`}>{query.length}/200</div>

            </div>
        </div>
    );
}   

export default Chat;