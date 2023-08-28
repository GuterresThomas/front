import React, { useState } from "react";

export default function EditEndpointForm({ endpoint, onUpdate }) {
  const [path, setPath] = useState(endpoint.path);
  const [method, setMethod] = useState(endpoint.method);
  const [response, setResponse] = useState(endpoint.response);

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
      const updateResponse = await fetch(`http://localhost:3000/endpoints/${endpoint.id}`, {
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
    <div>
      <h2>Edit Endpoint</h2>
      <div>
        <label>Path:</label>
        <input
          type="text"
          name="path"
          value={path}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Method:</label>
        <input
          type="text"
          name="method"
          value={method}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Response:</label>
        <input
          type="text"
          name="response"
          value={response}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdateEndpoint}>Update Endpoint</button>
    </div>
  );
}
