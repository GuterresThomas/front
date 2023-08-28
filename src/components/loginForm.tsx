'use client'
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";



export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = async () => {
        try {
          const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // Lógica para redirecionar ou mostrar uma mensagem de sucesso
            console.log("Login bem-sucedido!");
            router.push("/userpage");
          } else {
            // Tratar erros de login, como senha incorreta ou usuário não encontrado
            console.error("Erro de login:", data.error);
            alert("Erro de login:", data.error)
            
          }
        } catch (error) {
          console.error("Erro de login:", error);
          
        }
      };
    
      return (
        <div className="bg-violet-300 rounded-2xl shadow-md p-5 gap-3 space-y-4 space-x-2 flex flex-col">
          <div className="text-center font-bold uppercase text-xl">
            <h2>Login</h2>
          </div>
          <div>
            <label className="mr-1">Username:</label>
            <input className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl" type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label className="mr-1">Password:</label>
            <input className="p-2 bg-violet-100 hover:bg-violet-200 rounded-2xl" type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button className="bg-violet-500 hover:bg-violet-200 p-4 rounded-2xl font-bold uppercase" onClick={handleLogin}>Login</button>
        </div>
      );
}