import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RouteNavItem from "../components/RouteNavItems";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {fetchCategories} from '../actions/categories';
import { capitalize } from '../utils/helper';

class Header extends Component{
  componentDidMount(){
    this.props.fetchCategories();
  }
  render(){
    const { categories } = this.props;
    return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Readable</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
            {categories.length >0 && categories.map(( category, key ) =>{
                const {name, path} = category
                return (

                  <MenuItem key={path} eventKey={key} href = {`/${name}`}>{capitalize(name)}</MenuItem>
                )
              })}

          </NavDropdown>
        </Nav>
        <Nav pullRight>

            <RouteNavItem eventKey={1} href="/new"> Add New Posts </RouteNavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
const mapStateToProps = ({ categories })=> ({
  categories: Object.keys(categories).map(k => categories[k]),
})
const mapDispatchToProps = dispatch => ({
  fetchCategories:()=> dispatch(fetchCategories()) ,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
