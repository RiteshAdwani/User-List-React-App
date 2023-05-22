import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableRowSkeleton = ({ rows }) => {
  return Array(rows)
    .fill(0)
    .map((_, index) => (
      <tr key={index}>
        <td className="p-0">
          <div className="mb-2" role="button">
            <div className="d-flex">
              <Skeleton circle className="skeleton-avatar me-3" />

              <div className="d-flex flex-column ">
                <div className="pt-1 mb-0">
                  <Skeleton className="skeleton-name" />
                </div>
                <div>
                  <Skeleton className="skeleton-email" />
                </div>
              </div>
            </div>
          </div>
        </td>

        <td className="px-0 py-1">
          <div className="my-2">
            <Skeleton className="skeleton-status" />
          </div>
        </td>

        <td className="px-0 py-1">
          <div className="my-2">
            <Skeleton className="skeleton-role" />
          </div>
        </td>

        <td className="p-0">
          <div className="my-2">
            <Skeleton className="skeleton-removable" />
          </div>
        </td>
      </tr>
    ));
};

export default TableRowSkeleton;
