export default function SmallSpinner() {
  return (
    <div className="bg-black bg-opacity-10 flex items-center justify-center z-50 flex-col gap-2 rounded-md mt-4 py-4">
      <div className="w-[80px] h-[80px] border-[8px] border-t-transparent border-surfaceTertiary rounded-full animate-spin"></div>
      <p className="text-[16px] text-textButtonSecondary font-bold">
        Loading...
      </p>
    </div>
  );
}

