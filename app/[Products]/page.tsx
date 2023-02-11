import Link from "next/link"
export default function Home({params}: {params: {Products:string} }) {
  return (
    <>
    <h1>Home</h1>
    <Link href={"/about"}>About</Link>
    <br />
    <Link href={"/products"}>Products</Link>
    <br />
    <div>The product name is: {params.Products}</div>
    </>
    
  )
}


