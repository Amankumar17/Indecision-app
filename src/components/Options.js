import React from 'react';
import Option from './Option';

//stateless functional component
const Options = (props) => (
    <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button 
            className="button--link" 
            onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get stared!</p>}
        {
            props.options.map((x,index) => (
                <Option 
                    key={x} 
                    optionText={x}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                    />
            )
       )}
    </div>
);

export default Options;


// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll () {
//     //     console.log(this.props.options);
//     //     alert("Handle Remove all");
//     // }
//     render () {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((x) => <Option key={x} optionText={x}/>)}
//             </div>
//         );
//     }
// }

