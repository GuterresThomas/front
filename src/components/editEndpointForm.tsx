import React, { useState } from "react";

export default function EditEndpointForm({ endpoint, onUpdate }) {
  const [path, setPath] = useState(endpoint.path);
  const [method, setMethod] = useState(endpoint.method);
  const [response, setResponse] = useState(JSON.stringify(endpoint.response));

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "path") {
      setPath(value);
    } else if (name === "method") {
      setMethod(value);
    } else if (name === "response") {
      setResponse(value);
    }
  };

  const handleUpdateEndpoint = async () => {
    try {
      const updateResponse = await fetch(`http://localhost:3000/edit-endpoint/${endpoint.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: path,
          method: method,
          response: response,
        }),
      });

      if (updateResponse.status === 200) {
        onUpdate(); // Chama a função para atualizar a lista de endpoints
      }
    } catch (error) {
      console.error("Error updating endpoint:", error);
    }
  };

  return (
    <div className="p-3">
      <div className="text-center uppercase font-bold">
        <h2>Edit Endpoint</h2>
      </div>
      <div className="m-2">
        <label className="font-semibold mr-1">Path:</label>
        <input  className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl"
          type="text"
          name="path"
          value={path}
          onChange={handleInputChange}
        />
      </div>
      <div className="m-2">
        <label className="font-semibold mr-1">Method:</label>
        <input  className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl"
          type="text"
          name="method"
          value={method}
          onChange={handleInputChange}
        />
      </div>
      <div className="m-2">
        <label className="font-semibold mr-1">Response:</label>
        <input  className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl"
          type="text"
          name="response"
          value={response}
          onChange={handleInputChange}
        />
      </div>
      <button className="bg-violet-500 p-2 uppercase rounded-xl hover:bg-violet-200 font-bold" onClick={handleUpdateEndpoint}>Update Endpoint</button>
    </div>
  );
}
