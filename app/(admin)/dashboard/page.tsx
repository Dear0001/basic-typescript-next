"use client";
import DataTable, { TableColumn } from "react-data-table-component";
import { useEffect, useState } from "react";
import { ProductType } from "@/lib/definitions";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";

const Dashboard = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );
  //fetched products
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleViewProduct = (products: ProductType) => {
    setProductDetails(products);
    setOpenModal(true);
  };
  const columns: TableColumn<ProductType>[] = [
    {
      name: "No",
      selector: (row) => row.id,
    },
    {
      name: "Product Title",
      selector: (row) => row.title,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): any => (
        <Image width={38} height={25} src={row.image} alt="image" />
      ),
    },
    {
      name: "Category",
      selector: (row): any => row.category,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div>
          <button
            onClick={() => handleViewProduct(row)}
            className="text-blue-400 mx-2"
          >
            View
          </button>
          <button className="text-green-500 mx-2">Edit</button>
          <button className="text-red-400 mx-2">Delete</button>
        </div>
      ),
    },
  ];

  const [defaultImage, setDefaultImage] = useState<string>(
    "https://www.vectorstock.com/royalty-free-vectors/photo-placeholder-vectors"
  );
  return (
    <main className="h-screen none-scroll-bar">
      <DataTable
        customStyles={customStyles}
        fixedHeader
        columns={columns}
        progressPending={loading}
        data={products}
        pagination
        highlightOnHover
        striped
      />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Detail</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Image
              width={250} height={300}
              src={productDetails?.image || defaultImage}
              alt={productDetails?.title || "Unknown title"}
            />
            <h2 className="text-3xl text-gray-700 font-bold">{productDetails?.title || "No title"}</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {productDetails?.description || "No description"}
            </p>
            <span>{productDetails?.price || "No price"}</span>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default Dashboard;

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "38px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "1.2rem",
      backgroundColor: "fefefe",
    },
  },
  cells: {
    style: {
      paddingLeft: "38px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
