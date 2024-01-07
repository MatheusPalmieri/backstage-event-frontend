'use client';

import { useState } from 'react';

interface InputFloatingProps {
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'search'
    | 'textarea'
    | undefined;
  label: string;
  format?: (value: string) => string;
}

export const InputFloating = ({
  type = 'text',
  label,
  format,
  ...props
}: InputFloatingProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className='relative'>
      <input
        type={type}
        id='floating_outlined'
        placeholder=' '
        className='px-2.5 pb-2.5 pt-4 w-full text-base text-secondary-50 bg-transparent
                        rounded-lg border-2 border-secondary-50 focus:border-primary-500
                        focus:ring-0 peer transition duration-300'
        {...props}
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          setValue(format ? format(value) : value);
        }}
      />
      <label
        htmlFor='floating_outlined'
        className='absolute text-lg text-secondary-50 duration-300 transform -translate-y-5
                        scale-75 top-2 z-10 origin-[0] bg-secondary-550 px-4 peer-focus:px-4
                        peer-focus:text-primary-500 peer-placeholder-shown:-translate-y-1/2
                        peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                        peer-focus:-translate-y-5 start-1'
      >
        {label}
      </label>
    </div>
  );
};
