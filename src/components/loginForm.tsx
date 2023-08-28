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
            router.push("/listendpoints");
          } else {
            // Tratar erros de login, como senha incorreta ou usuário não encontrado
            console.error("Erro de login:", data.error);
          }
        } catch (error) {
          console.error("Erro de login:", error);
        }
      };
    
      return (
        <div>
          <h2>Login Form</h2>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
}