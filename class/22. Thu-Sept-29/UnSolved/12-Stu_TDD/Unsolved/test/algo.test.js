const Algo = require("../algo");
//tetst run
describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it('should return reverse a given string',()=>{
      const string = "Saurav"
      const reversed = "varuaS"
  
      const result = new Algo().reverse(string)
  
      expect(result).toBe(reversed);
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('should return true if the given string is a palindrome',()=>{
      const string = "racecar";
      
      const result = new Algo().isPalindrome(string)

      expect(result).toBe(true)
    })

    it('should return false if the given string is not a palindrome',()=>{
      const string = 'neon';
      const result = new Algo().isPalindrome(string)

      expect(result).toBe(false)
    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized

    it('It should return First letter of the word Capitalized for any given sentence ',()=>{
        const sentence = "capitalize a letter";
        const capitalized = "Capitalize A Letter";

        const result = new Algo().capitalize(sentence);

        expect(result).toEqual(capitalized)
    })
  });
});
