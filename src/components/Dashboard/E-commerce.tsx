"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook for navigation

const ECommerce: React.FC = () => {
  const [urlBlocks, setUrlBlocks] = useState([{ id: 1, url: "" }]);
  const router = useRouter(); // Initialize useRouter

  const handleAddBlock = () => {
    setUrlBlocks((prev) => [...prev, { id: prev.length + 1, url: "" }]);
  };

  const handleDeleteBlock = (id: number) => {
    setUrlBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  const handleUrlChange = (id: number, value: string) => {
    setUrlBlocks((prev) =>
      prev.map((block) => (block.id === id ? { ...block, url: value } : block))
    );
  };

  const processUrls = () => {
    const urls = urlBlocks
      .map((block) => block.url)
      .filter((url) => url.trim() !== "");
    console.log("Processing URLs:", urls);

    router.push("/Question");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">E-Commerce URL Manager</h1>
      {urlBlocks.map((block, index) => (
        <div
          key={block.id}
          className="flex items-center gap-2 mb-4 border p-2 rounded-md shadow-sm"
        >
          <input
            type="text"
            placeholder="Enter URL"
            value={block.url}
            onChange={(e) => handleUrlChange(block.id, e.target.value)}
            className="flex-grow p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleAddBlock}
            className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            +
          </button>
          {index > 0 && (
            <button
              onClick={() => handleDeleteBlock(block.id)}
              className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          )}
        </div>
      ))}

      <button
        onClick={processUrls}
        className="px-4 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700"
      >
        Process URLs
      </button>
    </div>
  );
};

export default ECommerce;
