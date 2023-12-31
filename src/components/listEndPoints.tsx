'use client'
import { useEffect, useState } from "react";
import EditEndpointForm from "@/components/editEndpointForm"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



export default function ListEndPoints() {
    const [endPoints, setEndPoints] = useState([])
    const [selectedEndpoint, setSelectedEndpoint] = useState(null)

    const fetchEndPoints = async () => {
        const response = await fetch('http://localhost:3000/endpoints')
        const data = await response.json()
        setEndPoints(data)
        console.log(data)
    }

    const handleEditButtonClick = (endpoint) => {
        setSelectedEndpoint(endpoint); // Define o endpoint selecionado para edição
      };

      const handleDeleteEndpoint = async (id) => {
        const shouldDelete = window.confirm('Tem certeza de que deseja excluir este endpoint?');
      
        if (!shouldDelete) {
          return; // Se o usuário clicar em "Cancelar", não faz nada
        }
      
        try {
          const response = await fetch(`http://localhost:3000/delete-endpoint/${id}`, {
            method: 'DELETE',
          });
      
          if (response.status === 200) {
            console.log('Endpoint deleted successfully!');
            fetchEndPoints(); // Atualize a lista de endpoints após a exclusão
          }
        } catch (error) {
          console.error('Error deleting endpoint:', error);
        }
      };
 

    useEffect(() => {
      fetchEndPoints()
    }, [])
    

    return(
        <div className="flex justify-center">
             <div className="m-12 p-3 bg-violet-200 rounded-xl">
             <div className="text-center font-bold text-lg">
                <h1>Lista de endpoints criados:</h1>
             </div>
                <ul>
                    {endPoints.map((endpoint) => (
                    <li key={endpoint.id}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>url: {endpoint.path}</AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <p className="font-semibold">Method:</p>
                                        {endpoint.method}
                                    </div>
                                    
                                    <div>
                                        <p className="font-semibold">Response:</p>
                                        {JSON.stringify(endpoint.response)}
                                    </div>
                                    <div>
                                        <p className="font-semibold">Criado em:</p>
                                        {endpoint.created_at}
                                    </div>
                                    <br />
                                    <div>
                                        
                                        <button className="bg-violet-500 p-2 uppercase rounded-xl hover:bg-violet-200 font-bold m-2" onClick={() => handleEditButtonClick(endpoint)}>Editar</button>
                                        <button className="bg-violet-500 p-2 uppercase rounded-xl hover:bg-violet-200 font-bold m-2" onClick={() => handleDeleteEndpoint(endpoint.id)}>Deletar</button>
                                
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>   
                    </li>
                    ))}
                </ul>
                <div>
                    {selectedEndpoint && (
                    <EditEndpointForm endpoint={selectedEndpoint} onUpdate = {() => {fetchEndPoints(); window.location.reload()}}/>
                    )}
                </div>
             </div>
        </div>
    )
}