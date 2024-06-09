import initialRender from "./initialRender.js";
import listener from "./listener.js";
import observer from "./observer.js";

class Todo {
  constructor() {}
  init() {
    console.log("Todo App Start");
    observer();
    initialRender();
    listener();
  }
}

export default Todo;
