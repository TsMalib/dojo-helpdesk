import {notFound} from "next/navigation";

export const dynamicParams = true

export async function generateStaticParams() {
    const response = await fetch(`http://localhost:4000/tickets`)

    const ticket = await response.json()

    return ticket.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id){
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) {
        notFound()
    }

    return response.json()
}

export default async function TicketDetail({ params }) {
    const ticket = await getTicket(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
        </main>
    );
}