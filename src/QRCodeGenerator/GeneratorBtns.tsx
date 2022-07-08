import { MouseEvent } from 'react';
import { FaQrcode } from 'react-icons/fa';

interface GeneratorBtnsProps {
  generate: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isDisabled: boolean;
  clear: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const GeneratorBtns = ({
  generate,
  isDisabled,
  clear,
}: GeneratorBtnsProps) => {
  return (
    <div className="flex w-full flex-grow items-center gap-4">
      <button
        className="btn btn-primary flex-1 gap-2 print:hidden"
        type="submit"
        onClick={generate}
        disabled={isDisabled}
        data-test="generate-btn"
      >
        GENERATE <FaQrcode />
      </button>
      <button
        type="button"
        className="btn btn-outline gap-2 print:hidden"
        onClick={clear}
        data-test="clear-btn"
      >
        CLEAR
      </button>
    </div>
  );
};
