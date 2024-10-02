import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromQuill } from '../slices/quillSlice';
import { AppDispatch, RootState } from '../store/store';
import toast from 'react-hot-toast';
import SearchInput from '../components/SearchInput';
import QuillList from '../components/QuillList';

function Quill() {
  const [searchTerm, setSearchTerm] = useState('');
  const quills = useSelector((state: RootState) => state.quill.quill);
  const dispatch = useDispatch<AppDispatch>();

  const filteredData = quills.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  function handleDelete(id: string) {
    dispatch(removeFromQuill(id));
  }

  function handleCopy(content: string) {
    navigator.clipboard.writeText(content);
    toast.success('Content copied successfully');
  }

  return (
    <div className="flex flex-col gap-4 min-w-full justify-center items-center mt-10">
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="min-w-full flex flex-col gap-3 border border-gray-600 rounded-md">
        <div className="flex justify-start min-h-[50px] min-w-full items-center">
          <h1 className="text-left px-4 font-semibold text-2xl">All Quill</h1>
        </div>
        <QuillList
          filteredData={filteredData}
          handleDelete={handleDelete}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
}

export default Quill;
