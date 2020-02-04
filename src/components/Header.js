import React from 'react';


//stateless functional component
const Header = (props) => (
    <div className="header">
    <div className="container">
    <h1 className="header__title">{props.title}</h1>
    <p>{props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}</p>
    </div>
    </div>
);

export default Header;


// class Header extends React.Component {
//     render () {
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <p>{this.props.subtitle}</p>
//             </div>
//             );
//     }
// }

//Default values can be set
// Header.defaultProps = {
//     title: 'some default'
// };
