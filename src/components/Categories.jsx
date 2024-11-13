// import { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";

const Categories = ({ categories }) => {
  const { category } = useParams();

  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-4 border px-16 py-4 border-gray-300 rounded-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-center px-4 py-2 rounded-3xl font-bold ${
              isActive ? "bg-bg-violet text-white" : ""
            }`
          }
        >
          All Product
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              `text-center px-4 py-2 rounded-3xl font-bold ${
                isActive ? "bg-bg-violet text-white" : "hover:bg-bg-violet"
              }`
            }
            key={category.id}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
