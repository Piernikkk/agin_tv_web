import React from 'react';
import { progressBarContainer, progressBarFill } from './styles';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className={progressBarContainer}>
            <div className={progressBarFill} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ProgressBar;