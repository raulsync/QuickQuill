import React from 'react';
import QuillItem from './QuillItem';

interface QuillListProps {
  filteredData: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  }[];
  handleDelete: (id: string) => void;
  handleCopy: (content: string) => void;
}

const QuillList: React.FC<QuillListProps> = ({
  filteredData,
  handleDelete,
  handleCopy,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {filteredData.length <= 0 ? (
        <div className="w-full">No Data Found</div>
      ) : (
        filteredData.map((quill) => (
          <QuillItem
            key={quill.id}
            quill={quill}
            handleDelete={handleDelete}
            handleCopy={handleCopy}
          />
        ))
      )}
    </div>
  );
};

export default QuillList;
