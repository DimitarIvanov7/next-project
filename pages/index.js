import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list"
import fs from 'fs/promises'
import path from "path"
import Link from 'next/link'

export default function Home(props) {
  const featuredData = getFeaturedEvents()

  const { products } = props;

  console.log(products);

  return (
    <div>
      <h1>Events</h1>
      <p>{JSON.stringify(products)}</p>
      <EventList items={featuredData}/>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
} 
