import { useState, useEffect } from "react";
import { fetchUsers } from "./redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import TableRowSkeleton from "./components/TableRowSkeleton";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="container main-content rounded-3 bg-white px-sm-5 px-2 py-3 mx-md-0 mx-2">
      {loading ? (
        <div className="d-flex justify-content-between flex-column flex-sm-row mb-2 pb-1">
          <table className="table table-borderless user-list-table">
            <thead>
              <tr>
                <th className="py-3 px-0 fs-4 fw-bold">Name</th>
                <th className="py-3 px-0 fs-4 fw-bold">Status</th>
                <th className="py-3 px-0 fs-4 fw-bold">Access</th>
                <th className="py-3 px-0 fs-4 fw-bold" />
              </tr>
            </thead>
            <tbody>
              <TableRowSkeleton rows={8} />
            </tbody>
          </table>
        </div>
      ) : (
        <UserList users={users} />
      )}
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default App;
