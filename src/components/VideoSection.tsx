import { MdArrowDropDown } from "react-icons/md";
import { useState, useEffect } from "react";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import Pagination from "./Pagination";

export default function VideoSection() {
  const menuList = ['Todos', 'Agências', 'Chatbot', 'Marketing Digital', 'Geração de Leads', 'Mídia Paga'];

  const [selectCategory, setSelectCategory] = useState<string>('');
  const handleCategoryFilter = (category: string) => {
    setSelectCategory(category === 'Todos' ? '' : category);
  };

  const [selectVideo, setSelectVideo] = useState<any>(null);
  const videoClick = (video: any) => {
    setSelectVideo(video);
  };

  const videosPerPage = 6;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredVideos, setFilteredVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/staticdata');
      const data = await response.json();
      setFilteredVideos(data);
    };
    fetchData();
  }, []);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * videosPerPage;
  const currentVideos = filteredVideos.slice(offset, offset + videosPerPage);

  return (
    <section className="bg-white dark:bg-gray-900 lg:py-20 py-10 border-b dark:border-gray-600">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
            {/* Botões de categorias */}
            {menuList.map((menu, i) => (
              <button
                key={i}
                type="button"
                className={`inline-block rounded-full secondary-color hover:text-white border secondary-border-color bg-primary-hover font-medium text-sm px-5 py-2.5 text-center mr-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-500 transition-all ease-in-out delay-100 ${selectCategory === menu ? 'bg-primary text-white' : ''}`}
                onClick={() => handleCategoryFilter(menu)}
              >
                {menu}
              </button>
            ))}
          </div>
          <div className="">
            <span className="mr-3 text-color dark:text-white">Ordenar Por:</span>
            <button className="text-color border secondary-border-color rounded-lg bg-secondary-hover hover:text-white font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:text-white dark:border-white dark:hover:bg-blue-700" type="button">
              Data de Publicação
              <MdArrowDropDown className="text-xl text-color dark:text-white" />
            </button>
            {/* List */}
            <div className="right-0 hidden z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Item 1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        {/* cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          <VideoList
            category={selectCategory}
            videoClick={videoClick}
            currentPage={currentPage}
            videosPerPage={videosPerPage}
          />
        </div>

        {selectVideo && (
          <VideoDetails video={selectVideo} onClose={() => setSelectVideo(null)} />
        )}

        <Pagination
          pageCount={Math.ceil(filteredVideos.length / videosPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
