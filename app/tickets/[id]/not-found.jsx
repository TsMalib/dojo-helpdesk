import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h1>Error 404</h1>
            <h2 className="text-3xl">We hit a brick wall.</h2>
            <p>We could not find the ticket you were looking for.</p>
            <p>Go back to all <Link href="/tickets">tickets</Link>.</p>
        </main>
    )
}