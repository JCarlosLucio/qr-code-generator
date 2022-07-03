import { MouseEvent } from 'react';
import { FaQrcode } from 'react-icons/fa';

interface GeneratorBtnsProps {
  generate: (_e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isDisabled: boolean;
  clear: (_e: MouseEvent<HTMLButtonElement>) => void;
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
      >
        Generate <FaQrcode />
      </button>
      <button
        type="button"
        className="btn btn-outline gap-2 print:hidden"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
};
