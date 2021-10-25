import React from "react";
import { persons } from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function WelcomePerson(props){
    
    return <h1>Hello, {props.persons.firstName}, {props.persons.lastName}, {props.persons.email}</h1>
}  
  
  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson persons = {persons[0]} />
        <WelcomePerson persons = {persons[1]} />
        <WelcomePerson persons = {persons[2]} />
    
      </div>
    );
  }

  export default MultiWelcome;