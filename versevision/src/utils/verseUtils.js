import verses from '../verses.json';

const VERSE_OF_DAY_KEY = 'verseOfDay';
const LAST_UPDATE_KEY = 'lastVerseUpdate';

export const getVerseOfTheDay = () => {
  const today = new Date().toDateString();
  const storedVerse = localStorage.getItem(VERSE_OF_DAY_KEY);
  const lastUpdate = localStorage.getItem(LAST_UPDATE_KEY);

  // If we have a stored verse and it was updated today, return it
  if (storedVerse && lastUpdate === today) {
    return JSON.parse(storedVerse);
  }

  // Otherwise, generate a new verse
  const randomIndex = Math.floor(Math.random() * verses.length);
  const newVerse = verses[randomIndex];

  // Store the new verse and update date
  localStorage.setItem(VERSE_OF_DAY_KEY, JSON.stringify(newVerse));
  localStorage.setItem(LAST_UPDATE_KEY, today);

  return newVerse;
}; 