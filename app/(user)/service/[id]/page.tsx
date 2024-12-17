import { CardComponent } from "@/components/card/CardComponent";

type PropsParams = {
  params: {
    id: number;
  };
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getProduct = async (id: number) => {
  const res = await fetch(`${ENDPOINT}/${id}`);
  const data = await res.json();
  return data;
};

const Detail = async ({ params: { id } }: PropsParams) => {
  console.log(id);
  const data = await getProduct(id);
  console.log(data);

  return (
    <div className="h-screen grid place-content-center">
      <CardComponent
        title={data?.title || "No Tilte"}
        description={data?.description || "No description"}
        image={data?.image || "https://imgs.search.brave.com/gF2OWvMMueAtyAKR8y7WvVDOonY0oJjmFZRgomrEE1U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc"}
        price={data.price || "10"}
      />
    </div>
  );
};

export default Detail;
