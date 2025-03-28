import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Layout from './components/Layout.js';
import NotFound from './components/404.js';
import { lazy, Suspense } from 'react';
const Blogs = lazy(() => import("./components/Blogs.js"));
const Create = lazy(() => import("./components/CreateBlog.js"))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<App/>}/>
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/create' element={<Create />}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
);
