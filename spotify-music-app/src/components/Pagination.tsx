export function Pagination({ page, onNext, onPrev }: any) {
  return (
    <div className="mt-8 flex justify-center items-center">
      <button
        onClick={onPrev}
        disabled={onPrev == null}
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed mr-4"
      >
        Previous
      </button>
      <p>{page}</p>
      <button
        onClick={onNext}
        disabled={onNext == null}
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed ml-4"
      >
        Next
      </button>
    </div>
  );
}
