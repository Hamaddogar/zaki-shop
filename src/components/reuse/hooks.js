"use client"
import { useEffect, useState } from 'react';

const knownDevices = [
    'Android'
];
// "A2651",
//     "A2893",
//     "A2894",
//     "A2896",
//     "A2895",
//     'iPhone',
//     'iPhone14,4',
//     'HUAWEI MediaPad M3',
//     'BTV-DL09',
const useDetectDevice = () => {
    const [isKnownDevice, setIsKnownDevice] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const foundDevice = knownDevices.some(device => userAgent.includes(device));
        setIsKnownDevice(foundDevice);
    }, []);

    return isKnownDevice;
};

export default useDetectDevice;
