import { useState, useEffect } from "react";

export default function AddEndPoints() {
    const handleCreateEndpoint = async () => {
        try {
            const response = await fetch('http://localhost:3000/create-endpoint', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    path: path,
                    method: method,
                    response: response,
                }),
            });
            if (response.status === 201) {
                console.log("Endpoint created successfully!");
                // Limpar os campos após a criação bem-sucedida
                setPath("");
                setMethod("");
                setResponse("");
            }
        } catch (error) {
            console.error("Error creating endpoint:", error);
          }
    };

    return (
        <div>
            <h2>Create Endpoint</h2>
            <div>
                <label>Path:</label>
                <input type="text" value={path} onChange={(e) => setPath(e.target.value)} />
            </div>
            <div>
                <label>Method:</label>
                <input type="text" value={method} onChange={(e) => setMethod(e.target.value)} />
            </div>
            <div>
                <label>Response:</label>
                <input type="text" value={response} onChange={(e) => setResponse(e.target.value)} />
            </div>
            <button onClick={handleCreateEndpoint}>Create Endpoint</button>
        </div>
    )
        
}