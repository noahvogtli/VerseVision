import verses from "../data/verses.json"

function hashString(str) {
    let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0; // Convert to 32-bit int
        }
    return Math.abs(hash);
}

export const getVerseOfTheDay = () => {
    const today = new Date().toISOString().split('T')[0]; 
    const seed = hashString(today);
    const index = seed % verses.length;
    return [verses[index].verse, verses[index].text];
};