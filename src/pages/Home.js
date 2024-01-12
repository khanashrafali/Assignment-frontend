import React, { useEffect, useState } from "react";

const Home = ({ setCurrentRoute, handleSingleData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/forms", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const jsonData = await response.json();
        console.log("Fetched data:", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteForm = async (formId) => {
    const response = await fetch(`http://localhost:4000/api/v1/forms/${formId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="max-w-[1300px] w-full mx-[100px]">
      <nav class="p-4 text-center ">
        <div class="container mx-auto">
          <h1 class="text-3xl font-bold">Welcome to Form.Com</h1>
          <p class="text-sm">This is a simple form builder.</p>
          <button onClick={() => setCurrentRoute("/create-form")} class="bg-blue-500 text-white px-2 py-1 mt-2 rounded hover:bg-blue-600">
            Create New Form
          </button>
        </div>
      </nav>
      <hr />

      {data?.length &&
        data.map((item, index) => (
          <div key={index} class="container mx-auto my-8">
            <h2 class="text-xl font-bold mb-4">Forms</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              <div class="bg-white p-4 rounded shadow">
                <h3 class="text-lg font-semibold mb-2">{item?.title}</h3>
                <div class="flex justify-evenly">
                  <button
                    class="text-blue-500 hover:underline"
                    onClick={() => {
                      handleSingleData(item);
                      setCurrentRoute("/view-form");
                    }}
                  >
                    View
                  </button>
                  <button class="text-green-500 hover:underline">Edit</button>
                  <button class="text-red-500 hover:underline" onClick={() => handleDeleteForm(item._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
