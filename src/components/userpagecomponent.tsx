import Link from "next/link"
export default function UserPage() {
    return (
        <div>
            <div className="bg-violet-500 rounded-2xl gap-2 space-y-2 p-5 m-16">
                <h1 className="font-bold text-center text-2xl">Bem vindo ao Gerador de Api!</h1>
                <p className="text-md">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, necessitatibus! Quod perspiciatis est deleniti facere nam illum dolores! Sint deserunt neque doloribus quasi necessitatibus dignissimos veritatis ex natus totam ratione.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quas sequi excepturi provident odio ullam eum. Facere consectetur saepe officiis maxime iste error aut, doloremque quam? Doloremque, magnam id?
                </p>
            </div>
            <div className="flex justify-center">
                <div className="space-x-4">
                    <Link href="/addendpoints"><button className="bg-violet-500 p-4 rounded-2xl uppercase font-bold hover:bg-violet-300">Adicionar Endpoint</button></Link>
                    <Link href="/listendpoints"><button className="bg-violet-500 p-4 rounded-2xl uppercase font-bold hover:bg-violet-300">Lista de Endpoints</button></Link>
                </div>
            </div>
        </div>
    )
}