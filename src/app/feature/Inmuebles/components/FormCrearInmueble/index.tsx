import { FormikHelpers, useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { Inmueble } from '../../models/Inmueble';
import { Input } from '../../../../shared/components/Input';
import { SpanError } from '../../../../shared/components/SpanError';
import { SubmitButton } from "../../../../shared/components/SubmitButton"

interface FormValues {
    valor: number;
    direccion: string;
}

interface FormCrearInmuebleProp {
    onSubmit: (payload: Inmueble) => void;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    valor: Yup.number().required('El campo valor es requerido').positive().integer(),
    direccion: Yup.string().required('El campo dirección es requerido')
});

export const FormCrearInmueble: React.FC<FormCrearInmuebleProp> = ({
    onSubmit, disabled, formTitle,
    initialValues = {
        direccion: "",
        valor: 150000
    },
}) => {

    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        onSubmit(values);
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    return <form onSubmit={formik.handleSubmit}>
        <h2>{formTitle}</h2>
        <Input
            disabled={disabled}
            name="direccion"
            placeholder="Dirección del inmueble"
            value={formik.values.direccion}
            onChange={formik.handleChange}
        />
        {formik.touched.direccion && formik.errors.direccion && (
            <SpanError>{formik.errors.direccion}</SpanError>
        )}
        <Input
            disabled={disabled}
            name="valor"
            placeholder="Valor mensual del inmueble"
            value={formik.values.valor}
            onChange={formik.handleChange}
            type="number"
        />
        {formik.touched.valor && formik.errors.valor && (
            <SpanError>{formik.errors.valor}</SpanError>
        )}
        <SubmitButton />
    </form>
}