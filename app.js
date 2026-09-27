const heading=React.createElement('h1',{id:'heading'},"Hello React");
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

// <div id="parent">
//     <div class="child">
//         <h1 id='header1'>test</h1>
//         <h2 id='header2'>test2</h2>
//     </div>
//     <div class="child2">
//         <h1 id='header3'>test3</h1>
//         <h2 id='header4'>test4</h2>
//     </div>
// </div>
// ReactElement(object) => HTML structure

const parent=React.createElement(
    'div',
    {class:'parent'},
    [
        React.createElement('div',{id:'child1'},
            [
                React.createElement('h1',{id:'header1'},'test'),
                React.createElement('h2',{id:'header2'},'test2')
            ]
        ),
        React.createElement('div',{id:'child2'},
            [
                React.createElement('h1',{id:'header3'},'test3'),
                React.createElement('h2',{id:'header4'},'test4')
            ]
        ),
    ]
);

root.render(parent);