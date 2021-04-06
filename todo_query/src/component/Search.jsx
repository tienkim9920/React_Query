import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    onSubmit: PropTypes.func,
};

Search.defaultProps = {
    onSubmit: null
}

function Search(props) {

    const { onSubmit } = props

    const [search, setSearch] = useState('')

    const delaySearchTextTimeOut = useRef(null)

    function onChangeText(e) {

        const value = e.target.value

        setSearch(value)

        if (onSubmit){

            if (delaySearchTextTimeOut.current){
                clearTimeout(delaySearchTextTimeOut.current)
            }
            
            delaySearchTextTimeOut.current = setTimeout(() => {
                onSubmit(value)
            }, 200)

        }

    }

    return (
        <form>
            <input type="text" placeholder="Enter Search!" onChange={onChangeText}/>
        </form>
    );
}

export default Search;