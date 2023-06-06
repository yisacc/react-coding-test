import { useState } from "react";

const Palindrome = () => {
  const [isPalindrome, setIsPalindrome] = useState("");
  let palindrome: string[] = [];
  const reverseWord = (text: string) => {
text.split("").reverse().join("");
  };
  const confirmMatch = (text: string) => {
    if (text === palindrome.join("")) {
      setIsPalindrome("That's a palindrome!");
      return;
    }
    setIsPalindrome("owwwwww");
  };
  const clearPalindrome = () => {
    palindrome = [];
  };
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let text = formData.get("palindromeText")?.toString() ?? "";
        reverseWord(text);
        confirmMatch(text);
        clearPalindrome();
      }}
    >
      <input name="palindromeText" />
      <button type="submit">check</button>
      {isPalindrome && <p>{isPalindrome}</p>}
    </form>
  );
};

export default Palindrome;
