import { Card } from "@/components/content/Card";
import { ABOUT_ME } from "@/constants/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Maulana Ibrahim Adiputra",
  description: 'My project',
}

export default function About() {
  
    return (
      <section className="w-5/6 mx-auto">
      <Card
        description={ABOUT_ME}
        title="Helloooooo!!!"
        date="10-02-2024"
        image="/images/hoodie_ibra.jpg"
        w={400}
        h={400}
      />
      <Card
        description={''}
        title="Tech Stack I Used"
        date="10-02-2024"
        image="/images/tech_stack.gif"
      />
    </section>
    );
  }
  