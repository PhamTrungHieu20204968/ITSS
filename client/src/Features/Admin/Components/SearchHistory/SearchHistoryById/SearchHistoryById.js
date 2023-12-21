import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSearchHistoryQuery } from 'app/api/searchHistoryService';
import { Table } from 'antd';
import Sidebar from 'Features/Admin/Components/Sidebar/Sidebar';
import './SearchHistoryById.scss';
import 'Features/Admin/index.scss';

const GetSearchHistoryById = () => {
    const params = useParams();
    const {
        data: userData,
        isError,
        isLoading,
    } = useGetSearchHistoryQuery({
        id: params.id,
        headers: {
            accessToken: JSON.parse(localStorage.getItem('user')).token,
        },
    });

    if (isError) {
        return <h1>Something went wrong!</h1>;
    } else if (isLoading) {
        return <h1>Loading ... </h1>;
    }

    const columns = [
        {
            title: 'Order',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'WordId',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Word',
            dataIndex: 'word',
            key: 'word',
        },
        {
            title: 'Furigana',
            dataIndex: 'furigana',
            key: 'furigana',
        },
    ];

    console.log(userData);

    return (
        <div className="search-history-by-id">
            <div className="home-admin">
                <Sidebar />
                <div className="admin-selected-features">
                    <div className="title">
                        <h1>Search History</h1>
                    </div>
                    <div className="user">
                        <h1>User: {userData[0].name}</h1>
                    </div>
                    <div className="search-history-by-id-table">
                        <Table
                            columns={columns}
                            dataSource={userData[0].Words?.map((word, index) => ({
                                key: word.id,
                                index: index+1,
                                word: word.word,
                                furigana: word.furigana,
                            }))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetSearchHistoryById;
