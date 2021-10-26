import React from "react";
import { persons } from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function WelcomePerson(props){
    const {firstName, lastName, email} = props.persons;
    return <h1>Hello, {firstName}, {lastName}, {email}</h1>
}  
  
  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
       {/* <WelcomePerson persons = {persons[0]} />
        <WelcomePerson persons = {persons[1]} />
        <WelcomePerson persons = {persons[2]} /> */}
        {persons.map((p)=> <WelcomePerson persons = {p}/>)}
    
      </div>
    );
  }

  export default MultiWelcome;