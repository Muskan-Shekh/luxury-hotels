"use client";
import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/minimal.css';

function Pagination({ setCurrentPage, totalPages, currentPage }) {
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage} // Updates the current page
    />
  );
}

export default Pagination;
