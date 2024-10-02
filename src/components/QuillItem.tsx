import React from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { LuShare } from 'react-icons/lu';
import { GrView } from 'react-icons/gr';

interface QuillItemProps {
  quill: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  };
  handleDelete: (id: string) => void;
  handleCopy: (content: string) => void;
}

const QuillItem: React.FC<QuillItemProps> = ({
  quill,
  handleDelete,
  handleCopy,
}) => {
  return (
    <div className="flex flex-col border border-gray-600 w-[99%] px-2 m-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-400">
            Title : {quill.title}
          </div>
          <div>{quill.content}</div>
        </div>
        <div className="flex gap-1">
          <button>
            <FiEdit />
          </button>
          <button>
            <GrView />
          </button>
          <button onClick={() => handleDelete(quill.id)}>
            <RiDeleteBinLine />
          </button>
          <button onClick={() => handleCopy(quill.content)}>
            <IoCopyOutline />
          </button>
          <button>
            <LuShare />
          </button>
        </div>
      </div>
      <div className="flex">{quill.createdAt}</div>
    </div>
  );
};

export default QuillItem;
