import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import ItemUser from '../data/ItemUser.jsx';
import Pagination from './Pagination.jsx';
import Search from './Search.jsx';

const Users = () => {

    const [data, setData] = useState([])

    const [dataTemp, setDataTemp] = useState([])

    const [totalProduct, setTotalProduct] = useState({
        length: 1
    });

    const [pagination, setPagination] = useState({
        page: 1,
        count: 6
    })

    const [filter, setFilter] = useState({
        page: 1,
        count: 6,
        search: ""
    })

    useEffect(() => {

        async function fetchData() {
            const requestUrl = `http://localhost:3000/Shopping/products/page/?page=${filter.page}&count=${filter.count}&search=${filter.search}`
            // const requestUrl = `http://localhost:3000/Shopping/products/page/?page=${filter.page}&count=${filter.count}`
            const response = await fetch(requestUrl)
            const responseJSON = await response.json()
    
            console.log({ responseJSON })

            setData(responseJSON)
            setDataTemp(responseJSON)
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
            count: filter.count,
            search: ""
        })
    }

    function handlerFilterChange(newData) {
        console.log("Data: " + newData)

        //------ Search Cách 2 GET lại API dữ vào filter bởi vì mỗi khi Filter thay đổi thì useEffect sẽ load lại ------//
        setFilter({
            // page: filter.page,
            // count: filter.count,
            ...filter,
            search: newData
        })


        //------- Search Cách 1 filter dữ liệu không cần GET lại API-------//
        // var listDataBanDau = dataTemp;

        // console.log(listDataBanDau)

        // var arrListSearch = [];

        // for (var i = 0; i < listDataBanDau.length; i++) {
        //     var getName = listDataBanDau[i].nameProduct.toUpperCase();
        //     var valueSearch = newData.toUpperCase();

        //     if (getName.indexOf(valueSearch) !== -1) {
        //         arrListSearch.push(listDataBanDau[i]);
        //     }
        // }

        // console.log(arrListSearch)
        // setData(arrListSearch)
    }

    return (
        <div>
            <Search onSubmit={handlerFilterChange} />
            <ItemUser data={data} key={data.id}/>
            <Pagination pagination={pagination} totalProduct={totalProduct} onPageChange={handlerPageChange}/>
        </div>
    );
}

export default Users;