import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null
}

function Pagination(props) {

    const { onPageChange, pagination, totalProduct } = props

    const totalPage = Math.ceil(totalProduct.length / pagination.count)

    console.log(totalPage)

    function handlerPageChange(newPage) {
        if (onPageChange){
            onPageChange(newPage)
        }
    }

    return (
        <div className="pagination">
            <button 
                disabled={pagination.page <= 1}
                onClick={() => handlerPageChange(pagination.page - 1)}>
                    Previous Page
            </button>

            <button
                disabled={pagination.page >= totalPage}
                onClick={() => handlerPageChange(pagination.page + 1)}>
                    Next Page
            </button>
        </div>
    );
}

export default Pagination;