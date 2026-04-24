import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";
const TodoPage = lazy(() => import("../pages/TodoPage.jsx"));

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoPage/>}/>
        </Routes>
    );
};

export default AllRoutes;
