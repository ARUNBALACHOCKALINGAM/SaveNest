

interface Props {
    title: any
}
export const Title: React.FC<Props> = ({ title }) => {
    return (
        <h1 className="font-ios text-2xl text-primary text-xl text-center p-2 font-bold mt-2 ">{title}</h1>
    )
}
