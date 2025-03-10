type Props = {
  onPrev?: () => Promise<void>;
  onNext?: () => Promise<void>;
};

export function Pagination({ onPrev, onNext }: Props) {
  return (
    <div className="flex justify-center mt-[16px]">
      <button
        onClick={onPrev}
        disabled={!onPrev}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        戻る
      </button>
      <button
        onClick={onNext}
        disabled={!onNext}
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        次へ
      </button>
    </div>
  );
}
