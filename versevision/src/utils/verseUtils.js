import verses from '../verses.json';

export const getVerseOfTheDay = () => {
  // Get today's date as a string (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];
  
  // Create a deterministic number based on the date
  const dateNumber = today.split('-').reduce((acc, val) => acc + parseInt(val), 0);
  
  // Use the date number to select a verse (will be the same for everyone on the same day)
  const index = dateNumber % verses.length;
  
  return verses[index];
}; 