'use client'
import { useState, useEffect } from "react";

export default function AddEndPoints() {
    const [path, setPath] = useState("");
    const [method, setMethod] = useState("");
    const [responseInput, setResponseInput] = useState(""); // Renomeada para responseInput

    const handleCreateEndpoint = async () => {
        try {
            const createResponse = await fetch('http://localhost:3000/create-endpoint', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    path: path,
                    method: method,
                    response: responseInput, // Usando a variável responseInput aqui
                }),
            });
            if (createResponse.status === 201) {
                console.log("Endpoint created successfully!");
                // Limpar os campos após a criação bem-sucedida
                setPath("");
                setMethod("");
                setResponseInput("");
            }
        } catch (error) {
            console.error("Error creating endpoint:", error);
          }
    };

    return (
        <div>
            <div>
                <h2>Tutorial</h2>
                <p>Preencha os Campos de Forma Adequada:
                Certifique-se de preencher os campos de acordo com suas necessidades. Por exemplo:
                <br />
                <span>Path: /nomes</span>
                <br />
                Method: GET
                <br />
                Response: {'{"nome": "joão"}'}</p>
                <br />
            </div>
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
                    <input type="text" value={responseInput} onChange={(e) => setResponseInput(e.target.value)} />
                </div>
                <button onClick={handleCreateEndpoint}>Create Endpoint</button>
            </div>
        </div>
    )   
}
