export default function Spinner() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex items-center justify-center z-50 flex-col gap-3 rounded-md">
      <div className="w-[160px] h-[160px] border-[16px] border-t-transparent border-surfaceTertiary rounded-full animate-spin"></div>
      <p className="text-[32px] text-textButtonSecondary font-bold">
        Loading...
      </p>
    </div>
  );
}

