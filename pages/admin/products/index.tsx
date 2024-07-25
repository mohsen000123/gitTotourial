import AdminPanelLayout from "@/app/components/adminPanelLayout";

import { NextPageWithLayout } from "../../_app";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProductList: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  // FaArrowDown , FaArrowUp

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    لیست محصولات
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-base uppercase px-3 py-3 rounded outline-none focus:outline-none mr-52 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                  >
                    اضافه کردن محصول
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right">
                      شماره محصول
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right">
                      عنوان محصول
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right text-blueGray-700 ">
                      /argon/
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      4,569
                    </td>
                    <a
                      href="#"
                      className="text-base text-indigo-600 hover:text-indigo-900"
                    >
                      ویرایش
                    </a>
                    <a
                      href="#"
                      className="text-base pr-3 text-indigo-600 hover:text-indigo-900"
                    >
                      حذف
                    </a>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav className="border-t " aria-label="Page navigation example ">
              <ul className="list-style-none flex">
                <li className="border-x">
                  <a
                    className="mt-1 relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#"
                  >
                    <FaAngleRight />
                  </a>
                </li>
                <li className="border-r">
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li className="border-r" aria-current="page">
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li className="border-r">
                  <a
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li className="border-x">
                  <a
                    className="relative block rounded bg-transparent px-3 mt-1 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#"
                  >
                    <FaAngleLeft />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};
ProductList.getLayout = (page) => <AdminPanelLayout>{page} </AdminPanelLayout>;

export default ProductList;
