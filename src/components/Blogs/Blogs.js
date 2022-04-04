import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Contex API ?</h2>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.Context is designed to share data that can be considered global for a tree of React components, such as the current authenticated user, theme, or preferred language.</p>

            <h2>Semantic tags ?</h2>
            <p>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents.In programming, Semantics refers to the meaning of a piece of code for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have.</p>
        </div>
    );
};

export default Blogs;