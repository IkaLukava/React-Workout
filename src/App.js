import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import "./App.css";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter2 from "./components/Counter2";
import ClickCounterTwo from "./components/ClickCounterTwo";
import { UserProvider } from "./components/userContext";
import ComponentF from "./components/ComponentF";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import ClassCounterOne from "./components/ClassCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFatching from "./components/DataFatching";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFatchingOne from "./components/DataFatchingOne";
import Counterr from "./components/Counterr";
import FocusInputt from "./components/FocusInputt";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import CounterOne1 from "./components/CounterOne1";
import CounterTwo2 from "./components/CounterTwo2";
import UserForm from "./components/UserForm";
import { UseState } from "./components2/UseState";

function App() {
  return (
    <div className="App">
      <UseState/>
      {/* <UserForm/> */}
      {/* <CounterOne1/> */}
      {/* <CounterTwo2/> */}
      {/* <HookTimer/> */}
      {/* <ClassTimer/> */}
      {/* <FocusInputt/> */}
      {/* <Counterr/> */}
      {/* <DataFatchingOne/> */}
    </div>
  );
}

export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// const [count, dispatch] = useReducer(reducer, initialState);
// return (
//   <CountContext.Provider
//   value={{ countState: count, countDispatch: dispatch }}
// >
{
  /* cunt - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC /> */
}
{
  /* <CounterThree/> */
}
{
  /* <CounterTwo/> */
}
{
  /* <CounterOne/> */
}
{
  /* <UserContext.Provider value={'ika'}>
         <ChannelContext.Provider value={'ertujrediani'}>
           <ComponentC/>   
         </ChannelContext.Provider>
       </UserContext.Provider> */
}
{
  /* </CountContext.Provider> */
}
// )

{
  /* 
 class App extends Component {
 render() {
 return (
 <div className="App"> */
}
{
  /* <DataFatching/> */
}
{
  /* <IntervalHookCounter/> */
}
{
  /* <MouseContainer/> */
}
{
  /* <HookMouse/> */
}
{
  /* <ClassCounterOne/> */
}
{
  /* <HookCounterOne/>  */
}
{
  /* <HookCounterFour/>  */
}
{
  /* <HookCounterThree/> */
}
{
  /* <HookCounterTwo/> */
}
{
  /* <HookCounter/> */
}
{
  /* <ClassCounter/> */
}
{
  /* <PostForm/> */
}
{
  /* <PostList/> */
}
{
  /* <UserProvider value='iko'>
          <ComponentF/>
        </UserProvider> */
}
{
  /* <Counter2 
          render={(count,incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        />
        <Counter2 
          render={(count,incrementCount)=>(
            <HoverCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        /> */
}
{
  /* <ClickCounter/>
        <HoverCounterTwo/> 
        <User render={(isLoggedIn)=>isLoggedIn?'iko':'niko'}/> */
}
{
  /* <HoverCounter/> */
}
{
  /* <ClickCounter name='iko'/> */
}
{
  /* <ErrorBoundary> */
}
{
  /* <Hero heroName="batman"/> */
}
{
  /* <Hero heroName="superman"/> */
}
{
  /* <Hero heroName="Joker"/> */
}
{
  /* </ErrorBoundary> */
}
{
  /* <PortalDemo/> */
}
{
  /* <FRParentInput/> */
}
{
  /* <FocusInput/> */
}
{
  /* <RefsDemo/> */
}
{
  /* <ParentComp/> */
}
{
  /* <Table/> */
}
{
  /* <FragmentDemo/> */
}
{
  /* <LifecycleA/> */
}
{
  /* <Form /> */
}
{
  /* <h1 className="error">Error</h1> */
}
{
  /* <h1 className="error">Error</h1> */
}
{
  /* <h1 className={styles.sucess}>Success</h1> */
}
{
  /* <Inline/> */
}
{
  /* <Stylesheet primary={true} /> */
}
{
  /* <NameList/> */
}
{
  /* <UserGreeting/> */
}
{
  /* <ParentComponent/> */
}
{
  /* <EventBind/> */
}
{
  /* <ClassClick/>  */
}
{
  /* <FunctionClick/> */
}
{
  /* <Counter/> */
}
{
  /* <Message /> */
}
{
  /* <Greet name='tamarchik' heroname='rusian'>
          <p>this is  children  props</p>
        </Greet> */
}
{
  /* <Greet name='malavka' heroname='new-york and russian'>
          <button>Action</button>
         </Greet> */
}
{
  /* <Greet name='sasuke' heroname='Error'/> */
}
{
  /* <Welcome name="naruto" heroname="sillyboy"/> */
}
{
  /* <Welcome name="boruto" heroname="naruto'schild"/> */
}
{
  /* <Welcome name="sakura" heroname="cringe"/>  */
}
{
  /* <Hello/> */
}
{
  /* </div>
 );
}
} */
}

export default App;
