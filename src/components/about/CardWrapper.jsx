export default function CardWrapper({ children }) {
  return (
    <div
      className="
      p-[2px] rounded-3xl 
      bg-gradient-to-r from-blue-500 to-purple-500 
      fade-in w-full
    "
    >
      <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl w-full">
        {children}
      </div>
    </div>
  );
}
