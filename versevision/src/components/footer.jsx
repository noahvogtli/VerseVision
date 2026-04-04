import React from "react";
import { useLocation } from "react-router-dom";


function Footer() {
    const location = useLocation();
    const browser = location.pathname;
    return (
        <div className={browser === '/chat' ? 'hidden' : 'block'}>
            <div className="w-full text-center p-4 mt-10 border-t">
                <p className="text-xs text-gray-500">© 2026 VerseVision. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;