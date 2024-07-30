import { FC } from "react";




interface Props {
    username: string
}


const Welcome: FC<Props> = ({ username }) => {
    return (<div className="flex flex-col px-2 tracking-wide ml-4 mt-6 justify-center align-center">
        <h1 className="text-2xl font-bold lg:text-2xl">Hi, <span>{username}</span></h1>
        <p className="lg:text-xl">Welcome to <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">SpendTrend.</span></p>
    </div>);
}

export default Welcome;