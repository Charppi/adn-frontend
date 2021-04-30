import { FormikHelpers, useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { Usuario } from '../../models/Usuario';
import { Input } from '../../../../shared/components/Input';
import { SpanError } from '../../../../shared/components/SpanError';
import { SubmitButton } from "../../../../shared/components/SubmitButton"

interface FormValues {
    nombre: string
    apellido: string
    cedula: number
}

interface FormCrearUsuarioProp {
    onSubmit: (payload: Usuario) => void;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    nombre: Yup.string().required('El campo nombre es requerido'),
    apellido: Yup.string().required('El campo apellido es requerido'),
    cedula: Yup.number().required('El campo cedula es requerido').min(4),
});

export const FormCrearUsuario: React.FC<FormCrearUsuarioProp> = ({
    onSubmit, disabled, formTitle,
    initialValues = {
        nombre: "", apellido: "", cedula: 0
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
            name="nombre"
            placeholder="Dirección del inmueble"
            value={formik.values.nombre}
            onChange={formik.handleChange}
        />
        {formik.touched.nombre && formik.errors.nombre && (
            <SpanError>{formik.errors.nombre}</SpanError>
        )}
        <Input
            disabled={disabled}
            name="apellido"
            placeholder="Valor mensual del inmueble"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            type="text"
        />
        {formik.touched.apellido && formik.errors.apellido && (
            <SpanError>{formik.errors.apellido}</SpanError>
        )}
        <Input
            disabled={disabled}
            name="cedula"
            placeholder="Valor mensual del inmueble"
            value={formik.values.cedula}
            onChange={formik.handleChange}
            type="number"
        />
        {formik.touched.cedula && formik.errors.cedula && (
            <SpanError>{formik.errors.cedula}</SpanError>
        )}
        <SubmitButton />
    </form>
}