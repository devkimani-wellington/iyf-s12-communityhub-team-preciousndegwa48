import Greeting from "./Greeting";
import Counter from "./Counter";
import Toggle from "./Toggle";
import TodoList from "./TodoList";
import CardExercise from "./CardExercise";
import PostCardExercise from "./PostCardExercise";
import ContactForm from "./ContactForm";
import SimpleList from "./SimpleList";
import Intro from "./Intro";

function AppShowcase() {
  return (
    <div>
      <h1>My React Exercises</h1>
      <Intro />
      <Greeting name="Purity" />
      <Counter />
      <Toggle />
      <TodoList />
      <CardExercise />
      <PostCardExercise />
      <ContactForm />
      <SimpleList />
    </div>
  );
}

export default AppShowcase;
