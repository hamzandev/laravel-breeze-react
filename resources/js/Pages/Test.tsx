import TestLayout from "@/Layouts/TestLayout";
import { FaPlusCircle } from "react-icons/fa";

type User = { id: number; name: string; email: string };

export default function Test({ users, data }: { users?: User[]; data?: any }) {
  return (
    <TestLayout>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Test Page</h1>
          <button className="btn btn-success btn-sm">
            <FaPlusCircle />
            Click
          </button>
        </div>
        <div className="container mx-auto py-20 grid md:grid-cols-3 gap-5">
          {users?.map((user) => {
            return (
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{user.name}</h2>
                  <p>{user.email}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={`test/${user.id}`}
                      role="button"
                      className="btn btn-sm btn-outline"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>{JSON.stringify(data)}</div>
      </div>
    </TestLayout>
  );
}
