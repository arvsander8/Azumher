import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './css/SideBar.css';

class SideBar extends Component{
    static propTypes = {
        list: PropTypes.array.isRequired,
    };   
    render(){
        const {list} = this.props;
        return(
            <div className="SideBar">
                <h2>SIDEBAR</h2>
                <ul className="SideList">
                {list && list.map(
                    (list, key) => <li key={key}><Link to={list.url}>{list.title}</Link> </li>)}
                </ul>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}
export default SideBar;