import React from 'react';


// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleplus = this.handleplus.bind(this);
//         this.handleminus = this.handleminus.bind(this);
//         this.handlereset = this.handlereset.bind(this);
//         this.state = {
//             count: 0
//         };
//     }
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('count');
//             const count = parseInt(json,10);
//             if(!isNaN(count)) {
//                 this.setState( () => ({count}));
//             }
//         }catch (e) {
//             //Nothing to do
//         }
//     }
//     componentDidUpdate(prevProps,prevState) {
//         if(prevState.count !== this.state.count) {
//             const json = this.state.count;
//             localStorage.setItem('count',json);
//         }
//     }
//     handleplus() {
//         this.setState( (prevstate) =>{
//             return {
//                 count: prevstate.count+1
//             };             
//         });
//     }
//     handleminus() {
//         this.setState( (prevstate) =>{
//             return {
//                 count: prevstate.count-1
//             };             
//         });
//     }
//     handlereset() {
//         this.setState( () =>{
//             return {
//                 count: 0
//             };             
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count : {this.state.count}</h1>
//                 <button onClick={this.handleplus}>+1</button>
//                 <button onClick={this.handleminus}>-1</button>
//                 <button onClick={this.handlereset}>reset</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Counter />,document.getElementById('root'));

