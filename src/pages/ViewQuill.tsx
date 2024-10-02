import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';

function ViewQuill() {
  const { id } = useParams();
  const quills = useSelector((state: RootState) => state.quill.quill);

  const quill = quills.filter((q) => id === q.id)[0];

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-center mt-20 gap-5 w-full ">
        <input
          className="px-5 w-full py-2 rounded-lg bg-gray-800"
          type="text"
          placeholder="Enter your title"
          value={quill.title}
          disabled
          // onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-center">
        <textarea
          className="p-5 focus-visible:ring-0 min-w-full bg-gray-800 rounded-lg"
          style={{
            caretColor: '#1a1a1a',
          }}
          disabled
          rows={18}
          placeholder="enter your content here"
          value={quill.content}
          // onChange={(e) => setContentValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ViewQuill;
