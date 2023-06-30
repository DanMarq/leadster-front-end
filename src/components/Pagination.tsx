import ReactPaginate from "react-paginate";

interface PaginationProps {
    pageCount: number
    onPageChange: (selectedItem: {selected: number}) => void
}

export default function Pagination({pageCount, onPageChange}: PaginationProps) {

    const handlePageChange = (selectedItem: {selected: number}) => {
        onPageChange(selectedItem)
    }

    return (
       <ReactPaginate
      previousLabel={"Anterior"}
      nextLabel={"Próximo"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={"pagination flex justify-center mt-4"}
      pageClassName={"bg-white hover:bg-gray-200 cursor-pointer rounded-md transition-colors duration-300 px-4 py-2 mx-1"}
      activeClassName={"bg-primary-color primary-color border primary-border-color"}
      previousClassName={"bg-white text-color dark:text-white hover:bg-gray-200 cursor-pointer transition-colors duration-300 rounded-full px-3 py-2 mx-1"}
      nextClassName={"bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-300 rounded-full px-3 py-2 mx-1"}
      disabledClassName={"cursor-not-allowed dark:bg-gray-300 text-gray-100 dark:text-white"}
        />
        )
}