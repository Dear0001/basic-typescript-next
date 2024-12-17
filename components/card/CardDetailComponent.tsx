
import { Card } from "flowbite-react";

type PropsType = {
  title: string;
  image: string;
  description: string;
  price: number;
};

export function CardComponent({title, image, description, price}: PropsType) {
  return (
    <Card className="max-w-sm" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {description}
      </p>
      <span className="text-2xl items-end font-normal text-gray-700 dark:text-gray-400">$ <del>{price}</del></span>
    </Card>
  );
}
