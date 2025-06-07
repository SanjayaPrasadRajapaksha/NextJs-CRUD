import Todo from "@/Components/Todo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <form className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <input type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
        <textarea name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full" ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11">Add Todo</button>
      </form>


      <div className="mt-8">
        <table id="search-table" className="min-w-full divide-y divide-gray-200 rounded-md overflow-hidden shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>


    </>
  );
}
