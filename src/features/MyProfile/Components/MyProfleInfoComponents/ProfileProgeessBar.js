import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; 
export default function ProfileProgeessBar({percentagevalue}) {
    var value = percentagevalue;
    const getColor = () => {
        if (value <=30) return '#ff0000';
        if (value >= 80) return '#07ef11';
        return '#00bfff';
    };

    const progressBarStyle = {
        backgroundColor: getColor(),
        height: '100%',
        borderRadius: 'inherit' 
    };

    const percentageTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold',
        color: value < 30 ? 'white' : 'black', 
        zIndex: 2, 
    };

    return (
        <div className="card w-[30%] relative">
            <div className="p-progressbar rounded-full h-6" style={{ position: 'relative' }}>
                <div className="p-progressbar-value" style={{ ...progressBarStyle, width: `${value}%` }}></div>
                <span style={percentageTextStyle}>{`${value}%`}</span>
            </div>
        </div>
    );
}