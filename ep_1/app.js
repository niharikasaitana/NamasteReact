  // just cretaed an elemnt so used React
  // inside createElemnt {} - is used to add attrib utes inside the tag like i'd class, we can we even give any value 
                const heading = React.createElement('div',{},'hello world from react!');
                const heading2 = React.createElement('div',{id:'heading2', class:'headings', xyz:'abc'})
                // here we are create the root under which we want cretaed elment to render - which is bascially an dom intercation . so, using ReactDOM
                const root = ReactDOM.createRoot(document.getElementById('root'));
                //here we are rendering
                root.render(heading2); // - this render method is bascially responsible for to take this object -convert into the tag and up it up into the dom
           //     console.log(root.render(heading)); //- this will return undfined bcz the render function return type is void - doest return any
                // here in below console's we gett object - it is create object - not h1 tag yet
                   //
                console.log(heading);
                console.log(heading2);

/**
 * IN ABOVE EXAMPLE WE JUST SAW JUST AN ELEMNT ADD TO DOM , BUT HOW TO DO IF IT IT IS NESTED ELMENTS LIKE BELOW
 * 
 * <div id="parnet">
      <div id="child1">
         <h1> heading 1</h1>
       </div>
    </div>
 */

    const nestedHeading = React.createElement('div',{id:'parnet'},
        React.createElement('h1',{id:'child1'}, 'heading 1')
    );

    root.render(nestedHeading);

    /* 
      * Nested elemnts with siblings
      * <div id="parnet">
      <div id="child1">
         <h1> heading 1</h1>
       </div>
       <div id="child2">
         <h1> heading 2</h1>
       </div>
    </div>
     */

    // to add siblings instead of single value , we send it in the array
    const nestingAndSiblingElement = React.createElement('div',{id:'parnet'},[
        React.createElement('h1',{id:'child1'}, 'heading 1'),
        React.createElement('h1',{id:'child2'}, 'heading 2')
    ])
    root.render(nestingAndSiblingElement);

    // as code is getting complex when the html has increase - it is complex - so we use JSX with create to create elemnt rather than like this without JSX

    /**
     * if we use same root and render with diff element's like in below it will render only last elment  i.e - nestingAndSiblingElement
        a. aslo inside the root in html code if the they is conatin then that contain will also replcaed by root.render value
        b. if we useediffernet and render then it won't effcet anything and it will apply changes to that particluar root
        c. if they is any tag/data abov or below data it will reamined same - react is only responsbile within the root
     * root.render(heading2);
     * root.render(nestedHeading);
     * root.render(nestingAndSiblingElement);
     */