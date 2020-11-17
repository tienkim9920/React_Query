import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import ItemUser from '../data/ItemUser.jsx';
import Pagination from './Pagination.jsx';

const Users = () => {

    const [data, setData] = useState([]);

    const [totalProduct, setTotalProduct] = useState({
        length: 1
    });

    const [pagination, setPagination] = useState({
        page: 1,
        count: 6
    })

    const [filter, setFilter] = useState({
        page: 1,
        count: 6
    })

    useEffect(() => {

        async function fetchData() {
            const requestUrl = `http://localhost:3000/Shopping/products/page/?page=${filter.page}&count=${filter.count}`
            const response = await fetch(requestUrl)
            const responseJSON = await response.json()
    
            console.log({ responseJSON })

            setData(responseJSON)
        }

        async function fetchAllData(){
            const requestUrl = `http://localhost:3000/Shopping/products`
            const response = await fetch(requestUrl)
            const responseJSON = await response.json()

            setTotalProduct({
                length: responseJSON.length
            })
        }
    
        fetchAllData()
        fetchData()
    }, [filter])

    function handlerPageChange(newPage) {
        console.log("New Page: " + newPage)
        setPagination({
            page: newPage,
            count: filter.count
        })
        setFilter({
            page: newPage,
            count: filter.count
        })
    }

    return (
        <div>
            <Pagination pagination={pagination} totalProduct={totalProduct} onPageChange={handlerPageChange}/>
            <ItemUser data={data} key={data.id}/>
        </div>
    );
}

export default Users;