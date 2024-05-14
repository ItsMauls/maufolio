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
            description="Built with NextJS."
            title="ERP Dashboard"
            date="14-05-2024"
            image="/images/erp_display_fe.png"
            link="https://github.com/ItsMauls/MauComps"
            linkTitle="Github Link"
            />
            <Card
            description="This project is a microservice-based system built using Docker, consisting of two main services: account service and payment service. The core functionality revolves around the `/send` and `/withdraw` APIs, which enable users to transfer and withdraw funds respectively. The project also includes Swagger for API documentation, facilitating easy understanding and interaction with the APIs."
            title="MauPayment API"
            date="14-05-2024"
            image="/images/money.gif"
            link="https://github.com/ItsMauls/be-assignment"
            linkTitle="Github Link"
            />
            <Card
            description="An e-commerce platform that brings back the delight of traditional cakes and a variety of other pastries"
            title="Hallo Butter"
            date="14-05-2024"
            image="/images/hallobutter_Display.png"
            link="https://github.com/ItsMauls/Project_HelloButter"
            linkTitle="Github Link"
            />
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