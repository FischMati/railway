import React from 'react';
import { Button } from '@nextui-org/react';
import PlusIcon from './PlusIcon';

interface IProps {
    onClick(): void;
}

const FloatingButton = ({ onClick }: IProps) => {
    return (
        <div className="fixed bottom-0 left-0 p-4">
            <Button isIconOnly onClick={onClick}>
                <div className="w-6 h-6 flex items-center justify-center">
                    <PlusIcon />
                </div>
            </Button>
        </div>
    );
};

export default FloatingButton;