import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading1 = React.createElement(
    "h1",
    {
        id: "title",
    },
    "Here is your's offer letter Nidhi -  "
);
*/



// JSX contains React.createElement()=> Object => HTML dom
// Using JSX: this is a react element
const heading1 = (
    <h1 id="title" key="h1">
        Here is Nidhi - 
    </h1>
)
/* ----->
const heading2 = React.createElement(
    "h2",
    {
        id: "title",
    },
    "Doing well "
);
// const container = React.createElement(       //u can use same name as well as different too!!
const result = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1,heading2]
);
<------ */ 




// components in react
//  Functional component - new way to use 
//  Class component - old way 
// Name of component stats with capital letter - it's mandatory

const HeaderComponent1 = ()=>{
    return (
        <div>
            {heading1}
            <h1>Hii Nidhi</h1>
            <h2>It's your letter</h2>
        </div>
    );
};

// another way of writing component :
/*
const HeaderComponent2 = (
    <div>
        <h1>"hi Nidhi"</h1>
        <h2>"hope you are fine!"</h2>
    </div>
);
*/
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(container);
// root1.render(heading1); //way of rendering react element
root1.render(<HeaderComponent1/>);