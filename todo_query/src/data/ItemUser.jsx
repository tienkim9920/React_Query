import React from 'react';
import PropTypes from 'prop-types';

ItemUser.propTypes = {
    users: PropTypes.array,
};

ItemUser.defaultProps = {
    users: []
}

function ItemUser(props) {

    const { data } = props
    console.log(data)

    return (
        <div>
            { data && data.map(value => (
            <div className="card" key={value._id}>
                <h4>{value.nameProduct}</h4>
                <p>{value.priceProduct}</p>
                <p>{value.Describe}</p>
            </div>
            )) }
        </div>
    );
}

export default ItemUser;