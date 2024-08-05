export default function taskBlock(trueOrFalse) {
    let task = false; // let because its block scoped, unlike var which is function scooped
    let task2 = true;
  
    if (trueOrFalse) {
      let task = true; 
      let task2 = false;
    }
  
    return [task, task2];
  }