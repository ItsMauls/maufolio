import type { Metadata } from 'next'
import { Card } from "@/components/content/Card"
 
export const metadata: Metadata = {
  title: "Maulana Ibrahim's project",
  description: 'My project',
}
 

export default function Projects () {
    return (
        <section className="w-5/6 mx-auto">
            <Card
            description=""
            title="Mauketik"
            date="10-02-2024"
            image="/images/mauketik_demo.gif"
            link="https://github.com/orgs/mauKetik/repositories"
            linkTitle="Github Link"
            />
            <Card
            description=""
            title="maunotion-api"
            date="10-02-2024"
            image="/images/notion.webp"
            link="https://github.com/ItsMauls/todolist-notion-api"
            linkTitle="Github Link"
            />
            <Card
            description=""
            title="MauRental"
            date="10-02-2024"
            image="/images/maurental.png"
            link="https://github.com/ItsMauls/MauRental"
            linkTitle="Github Link"
            w={700}
            h={700}
            />
            <Card
            description="My very first CRUD project using EJS, Express"
            title="Maufinance"
            date="10-02-2024"
            image="/images/maufinance.jpg"
            link="https://github.com/ItsMauls/maufinance"
            linkTitle="Github Link"
            w={700}
            h={700}
            />
      </section>
    )
}