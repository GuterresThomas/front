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
                alert("Endpoint criado com sucesso!")
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
        <div className="">
            <div className="bg-violet-200 flex flex-col justify-center p-5 m-12 rounded-2xl space-y-2 gap-2">
                <h2 className="text-lg font-bold">Tutorial de como adicionar um endpoint:</h2>
                <p className="font-semibold mb-2">Preencha os Campos de Forma Adequada:</p>
                <p className="font-semibold text-sm">    
                Certifique-se de preencher os campos de acordo com suas necessidades. Por exemplo:
                <br />
                <span>Path: /nomes</span>
                <br />
                Method: GET
                <br />
                Response: {'{"nome": "joão"}'}</p>
                <br />
            </div>
            <div className="bg-violet-200 p-5 flex justify-center flex-col m-12 rounded-2xl space-y-2 gap-2">
                <h2 className="text-lg font-bold text-center">Criar Endpoint</h2>
                <div className="flex ">
                    <div className="m-2 text-center p-2">
                        <label className="mr-1 font-semibold">Path:</label>
                        <input className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl" type="text" value={path} onChange={(e) => setPath(e.target.value)} />
                    </div>
                    <div className="m-2 text-center p-2">
                        <label className="mr-1 font-semibold">Method:</label>
                        <input className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl" type="text" value={method} onChange={(e) => setMethod(e.target.value)} />
                    </div>
                    <div className="m-2 text-center p-2">
                        <label className="mr-1 font-semibold">Response:</label>
                        <input className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl" type="text" value={responseInput} onChange={(e) => setResponseInput(e.target.value)} />
                    </div>
                </div>
                <button className="bg-violet-500 hover:bg-violet-200 p-4 rounded-2xl font-bold uppercase" onClick={handleCreateEndpoint}>Criar Endpoint</button>
            </div>
        </div>
    )   
}
