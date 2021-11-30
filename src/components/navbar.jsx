import React from "react";
//////////////Stateless Functional Component/////////////////
const NavBar = ({totalCounters}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};
// OR //

//////////////////Class Component/////////////////
// class NavBar extends React.Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-light bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               Navbar
//               <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//             </a>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }
/////////////////////////////////////////////////

export default NavBar;
