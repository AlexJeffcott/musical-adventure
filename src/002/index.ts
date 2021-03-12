import puzzleInput from "./data.json";
import { AnswerArgs, AnswerReturn } from "./types";

function answer(_puzzleInput: AnswerArgs): AnswerReturn {
  return _puzzleInput.reduce((prev: number, actual: number): number => {
    if (actual % 2 > 0) {
      return prev + 1;
    } else return prev;
  }, 0);
}

const result = answer(puzzleInput);
console.log(result);

/*
You can do anything you like inside the 'answer' function above.
Just return the right answer which will show in the console!
I you think that your function works, please run `npm run test`.
If you tests pass, then run `npm start` and give the answer!
 */

export default answer;
