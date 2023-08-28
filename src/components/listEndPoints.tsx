'use client'
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



export default function ListEndPoints() {
    const [endPoints, setEndPoints] = useState([])

    const fetchEndPoints = async () => {
        const response = await fetch('http://localhost:3000/endpoints')
        const data = await response.json()
        setEndPoints(data)
        console.log(data)
    }

    useEffect(() => {
      fetchEndPoints()
    }, [])
    

    return(
        <div>
             <ul>
                {endPoints.map((endpoint) => (
                <li key={endpoint.id}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>url: {endpoint.path}</AccordionTrigger>
                            <AccordionContent>
                                <div><p>Method:</p>{endpoint.method}</div>
                                
                                <div><p>Response:</p>{JSON.stringify(endpoint.response)}</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                </li>
                ))}
            </ul>
        </div>
    )
}