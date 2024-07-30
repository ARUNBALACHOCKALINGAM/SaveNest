import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";



export function Product({ image, name, price, description }: any) {
    return (
        <Card className="w-full items-stretch text-primary max-w-sm mx-auto mt-10 lg:mx-4 sm:w-80 md:w-96 lg:w-80 xl:w-96">
            <CardHeader shadow={false} floated={false} className="h-48 sm:h-52 md:h-56 lg:h-52 xl:h-56">
                <img
                    src={image}
                    alt={`${name}-image`}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        ${price}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75 italic"
                >
                    {description}
                </Typography>
                <div className="mt-4">
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75 italic"
                    >
                        Interested in buying but concerned about the cost? We offer flexible EMI options for the {name}.

                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth
                    className="bg-primary p-2 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Avail EMI Now!
                </Button>
            </CardFooter>
        </Card>
    );
}
