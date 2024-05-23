const h1 = <h1>Hello world</h1>;
const myArticle = <article></article>;

// Attributes In JSX
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;

// Nested JSX

const myDiv = (
    <div>
      <h1>Hello world</h1>
    </div>
);

// JSX Outer Elements

const blog = (
    <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
    </article>
  
    </div>
);

// Rendering JSX

import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:

const container1 = document.getElementById('app');
const root1 = createRoot(container1);
root1.render(<h1>Hello world</h1>);

// Passing a Variable to render()

import React from 'react';
import { createRoot } from 'react-dom/client';

const container2 = document.getElementById('app');
const root2 = createRoot(container2);
// Write code here:
const myList = (
  <ul>
    <li>a</li>
    <li>b</li>
  </ul>
)
root2.render(myList);
