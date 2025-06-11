import { UserX } from 'lucide-react';
const NoUserData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 p-6">
      <UserX className="w-16 h-16 text-red-400 mb-4" />
      <h2 className="text-xl font-semibold">No User Data Found</h2>
      <p className="text-sm mt-2 text-center">
        We couldn’t find any users. Try refreshing or check back later.
      </p>
    </div>
  );
};

export default NoUserData;
