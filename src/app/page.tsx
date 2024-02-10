import { Card } from "@/components/content/Card";

export default function Home() {
  
  return (
    <section className="w-5/6 mx-auto">
      <Card 
        description="Welcome to my portfolio site, where I share updates on my projects. Explore what I'm working on. You can also download my CV to learn more about my skills and experience. Thanks for visiting!"
        title="Hello World"
        date="10-02-2024"
        image="/images/progame.webp"
        w={400}
        h={400}
        link='/files/MAULANA_IBRAHIM_ADIPUTRA_CV.pdf'
        linkTitle="Download CV"
      />
      <Card 
        description="See you on top yall!"
        title="My Graduation Photo From Hacktiv8"
        date="10-02-2024"
        image="/images/hacktiv_graduates.jpg"
        w={700}
        h={700}
      />
      <Card 
        description="Pls dont judge my face lol"
        title="My Face When Coding"
        date="10-02-2024"
        image="/images/muka_coding.jpg"
        w={400}
        h={400}
      />
    </section>
  );
}
