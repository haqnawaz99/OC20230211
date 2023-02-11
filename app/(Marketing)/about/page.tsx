import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return (
    <>
    <h1>About</h1>
    <Link href={"/"}>Home</Link>
    <br />
        <Image src="/haqnawaz.png" width={200} height={200} alt="Picture" />
        <Image src="/khadija.jpg" width={200} height={300} alt="Picture" />
    </>
  )
}