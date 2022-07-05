/* (c) Copyright Frontify Ltd., all rights reserved. */

import { createContext, useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { FormContextType } from './types';

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = <T extends FieldValues>(): FormContextType<T> =>
    useContext(FormContext) as FormContextType<T>;
