/// <reference types="react" />
import { MouseEventHandler } from 'react';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'error';
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

declare function Button({ type, text, onClick }: ButtonProps): JSX.Element;

export { Button };
