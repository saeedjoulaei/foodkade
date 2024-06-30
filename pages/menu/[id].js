import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

function Details({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  return <DetailsPage {...data} />;
}

export default Details;
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/${params.id}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 1 * 60 * 60,
  };
}
