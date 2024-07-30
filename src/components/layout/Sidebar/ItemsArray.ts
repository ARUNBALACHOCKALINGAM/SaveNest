import { FC } from 'react';
import { FaTachometerAlt, FaEnvelope, FaRobot } from 'react-icons/fa';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

interface Item {
    Icon: FC<{ className: string }>;
    item: string;
}

export const Items: Item[] = [
    {
        Icon: FaTachometerAlt,
        item: "Dashboard"
    },
    {
        Icon: FaMoneyBillTransfer,
        item: "Loans"
    },
    {
        Icon: FaEnvelope,
        item: "Insurance"
    },
    {
        Icon: FaRobot,
        item: "Robot"
    },
];
