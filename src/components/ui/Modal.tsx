import { XIcon } from '@heroicons/react/solid';

type ModalProps = {
  title?: string;
  close?: () => void;
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-3xl">
      <div className="rounded shadow bg-white">
        <div className="flex justify-between items-start p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{props.title}</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="defaultModal"
          >
            <XIcon width={16} height={16} />
          </button>
        </div>
        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
