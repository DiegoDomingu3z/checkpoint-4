// import { ValuesController } from "./Controllers/ValuesController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();


  weatherController = new WeatherController()

  todoController = new TodoController()

  timeController = new TimeController()
}

window["app"] = new App();
