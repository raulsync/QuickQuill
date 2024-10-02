import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToQuill, updateToQuill } from '../slices/quillSlice';
import { AppDispatch, RootState } from '../store/store';

interface IQuill {
  title: string;
  content: string;
  id: string;
  createdAt: string;
}

function Home() {
  const [title, setTitle] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [searchParam, setSearchParam] = useSearchParams();
  const quillId = searchParam.get('quillId');
  const quills = useSelector((state: RootState) => state.quill.quill);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (quillId) {
      const paste = quills.find((quill) => quill.id === quillId);
      if (paste) {
        setTitle(paste.title);
        setContentValue(paste.content);
      }
    }
  }, [quillId, quills]);

  function createQuill() {
    const quill: IQuill = {
      title: title,
      content: contentValue,
      id: quillId || Date.now().toString(20),
      createdAt: new Date().toISOString(),
    };

    if (quillId) {
      dispatch(updateToQuill(quill));
    } else {
      dispatch(addToQuill(quill));
    }

    //after creation of quill clear the title and contentValue
    setTitle('');
    setContentValue('');
    setSearchParam({});
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-center mt-20 gap-5 w-full ">
        <input
          className="px-5 w-full py-2 rounded-lg bg-gray-800"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createQuill}
          className="bg-blue-500 px-4 w-1/3 rounded-lg font-semibold"
        >
          {quillId ? 'Update My Quill' : 'Create My Quill'}
        </button>
      </div>
      <div className="w-full flex justify-center">
        <textarea
          className="p-5 focus-visible:ring-0 min-w-full bg-gray-800 rounded-lg"
          style={{
            caretColor: '#1a1a1a',
          }}
          rows={18}
          placeholder="enter your content here"
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;
