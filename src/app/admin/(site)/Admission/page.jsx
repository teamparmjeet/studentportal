'use client';

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [admissions, setAdmissions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const [openAction, setOpenAction] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const menuRef = useRef(null);

  /* ======================
     FETCH DATA
  ====================== */
  const fetchAdmissions = async (pageNo = 1, reset = false) => {
    setLoading(true);

    let url = `/api/admission?page=${pageNo}&limit=10`;

    if (!reset && filterField && filterValue) {
      url += `&filterField=${filterField}&filterValue=${filterValue}`;
    }

    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();

    setAdmissions(json.data || []);
    setTotalPages(json.pagination?.totalPages || 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchAdmissions(page);
  }, [page]);

  /* ======================
     CLOSE ACTION MENU
  ====================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ======================
     FILTER HANDLERS
  ====================== */
  const handleSearch = () => {
    setPage(1);
    fetchAdmissions(1);
  };

  const clearFilter = () => {
    setFilterField("");
    setFilterValue("");
    setPage(1);
    fetchAdmissions(1, true);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">
          Admissions
        </h1>
        <p className="text-sm text-slate-500">
          View & manage admission records
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white border rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

          {/* FILTER FIELD */}
          <div>
            <label className="text-sm font-medium text-slate-600">
              Filter Field
            </label>
            <select
              value={filterField}
              onChange={(e) => {
                setFilterField(e.target.value);
                setFilterValue("");
              }}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500"
            >
              <option value="">Select</option>
              <option value="name">Name</option>
              <option value="mobile">Mobile</option>
              <option value="email">Email</option>
              <option value="programme">Programme</option>
              <option value="paymentStatus">Payment Status</option>
            </select>
          </div>

          {/* SEARCH INPUT / SELECT */}
          {filterField && (
            <div>
              <label className="text-sm font-medium text-slate-600">
                Search
              </label>

              {filterField === "paymentStatus" ? (
                <select
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              ) : (
                <input
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder={`Enter ${filterField}`}
                  className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500"
                />
              )}
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button
              onClick={handleSearch}
              disabled={!filterValue}
              className="px-4 py-2 text-sm rounded-md bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-40"
            >
              Search
            </button>

            <button
              onClick={clearFilter}
              className="px-4 py-2 text-sm rounded-md border text-slate-600 hover:bg-slate-100"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-lg overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3">Programme</th>
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="6" className="py-8 text-center text-slate-400">
                  Loading records...
                </td>
              </tr>
            )}

            {!loading && admissions.length === 0 && (
              <tr>
                <td colSpan="6" className="py-8 text-center text-slate-400">
                  No records found
                </td>
              </tr>
            )}

            {admissions.map((item) => (
              <tr key={item._id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.programme}</td>
                <td className="px-4 py-3">{item.mobile}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      item.paymentStatus === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.paymentStatus}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setMenuPosition({
                        x: rect.right - 160,
                        y: rect.bottom + 6,
                      });
                      setOpenAction(
                        openAction === item._id ? null : item._id
                      );
                    }}
                    className="px-3 py-1 text-xs rounded border hover:bg-slate-100"
                  >
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTION MENU */}
      {openAction && (
        <div
          ref={menuRef}
          className="fixed bg-white border rounded-md shadow-lg z-[9999] w-40"
          style={{
            top: menuPosition.y,
            left: menuPosition.x,
          }}
        >
          <button className="block w-full text-left px-4 py-2 hover:bg-slate-100">
            View Details
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-slate-100">
            Update Payment
          </button>
          <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex flex-wrap justify-between items-center mt-6 gap-3">
        <span className="text-sm text-slate-600">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 text-sm rounded border disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 text-sm rounded bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
