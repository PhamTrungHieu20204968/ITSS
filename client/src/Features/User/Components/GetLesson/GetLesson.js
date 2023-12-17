import React from 'react';
import { useGetLessonsQuery } from 'app/api/lessonService';
import { Button, Table } from 'antd';
import { useDispatch } from 'react-redux';
import { setTab } from 'Features/Admin/tabSlice';
import { useNavigate } from 'react-router-dom';
import './GetLesson.scss';
import NavBar from './../NavBar/NavBar';

const GetLesson = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: lessons, isError, isLoading } = useGetLessonsQuery();
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    const columns = [
        {
            title: 'Order',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Lesson Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => (
                <div>
                    <Button
                        type="primary"
                        onClick={() => {
                            dispatch(setTab('4'));
                            navigate(`/user/lesson/${record.id}`);
                        }}
                    >
                        Learn Lesson
                    </Button>
                </div>
            ),
        },
    ];

    const tableData = lessons.map((lesson, index) => {
        return {
            key: index,
            index: index + 1,
            id: lesson.id,
            name: lesson.name,
        };
    });

    return (
        <div>
            <NavBar />
            <div className="get-lesson">
                <div className="title">
                    <h1>GET LESSON</h1>
                </div>
                <Table columns={columns} dataSource={tableData} pagination={{ pageSize: 5 }} />
            </div>
        </div>
    );
};

export default GetLesson;
