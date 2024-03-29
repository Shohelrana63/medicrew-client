import React from 'react';
import { Link } from 'react-router-dom';
const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="text-primary font-weight-bold">{props.menuTitle ? props.menuTitle : " "}</h5>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}>
                        <Link to={item.link} >
                            <h6 className="text-secondary">{item.name}</h6>
                        </Link>
                    </li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;