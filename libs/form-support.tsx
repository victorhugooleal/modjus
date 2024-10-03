import { Button, Form } from 'react-bootstrap'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { z, ZodTypeAny, ZodError } from 'zod';
import _ from 'lodash'
import { Dispatch } from 'react';

export const numericString = (schema: ZodTypeAny) => z.preprocess((a) => {
    if (typeof a === 'string') {
        return parseInt(a, 10)
    } else if (typeof a === 'number') {
        return a;
    } else {
        return undefined;
    }
}, schema);


type FieldErrorProps = {
    formState: FormState
    name: string
}

type FormErrorProps = {
    formState: FormState
}

const FieldError = ({ formState, name }: FieldErrorProps) => {
    if (!formState.fieldErrors || !formState.fieldErrors[name]) return ''
    return (
        <span className="text-danger">
            {formState.fieldErrors[name]?.[0]}
        </span>
    )
}

const FormError = ({ formState }: FormErrorProps) => {
    if (formState.status !== "ERROR") return ''
    return (
        <span className="text-danger align-middle">
            <strong>Erro! </strong>{formState?.message} <span style={{ display: 'none' }}>{JSON.stringify(formState)}</span>
        </span>
    )
}

export { FieldError, FormError }

export type FormState = {
    status: 'UNSET' | 'SUCCESS' | 'ERROR'
    message: string
    fieldErrors: Record<string, string[] | undefined>
    timestamp: number
}

export const EMPTY_FORM_STATE: FormState = {
    status: 'UNSET' as const,
    message: '',
    fieldErrors: {},
    timestamp: Date.now(),
}

export const getPathReference = (path: (string | number)[]): string => {
    const segments = path.reduce((acc: string, segment, index) => {
        if (typeof segment === 'number') {
            return `${acc}[${segment}]`
        } else {
            return index === 0 ? `${segment}` : `${acc}.${segment}`
        }
    }, '');
    return segments as string;
}

export const fromErrorToFormState = (error: unknown) => {
    if (error instanceof ZodError) {
        const fieldErrors = error.errors.reduce((acc, e) => {
            if (!acc[getPathReference(e.path)])
                acc[getPathReference(e.path)] = [e.message]
            else
                acc[getPathReference(e.path)].push(e.message)
            return acc
        }, {} as any)
        return {
            status: 'ERROR' as const,
            message: '',
            fieldErrors,
            timestamp: Date.now()
        }
    } else if (error instanceof Error) {
        return {
            status: 'ERROR' as const,
            message: error.message,
            fieldErrors: {},
            timestamp: Date.now(),
        }
    } else {
        return {
            status: 'ERROR' as const,
            message: 'An unknown error occurred',
            fieldErrors: {},
            timestamp: Date.now(),
        }
    }
}

export class FormHelper {
    data: any;
    setData: (data: any) => void = () => { };
    formState: FormState = EMPTY_FORM_STATE;

    public update = (data: any, setData: (data: any) => void, formState: FormState) => {
        this.data = data;
        this.setData = setData;
        this.formState = formState;
    }

    // constructor(data: any, setData: (data: any) => void, formState: FormState) {
    //     this.data = data;
    //     this.setData = setData;
    //     this.formState = formState;
    // }

    public get = (name: string) => {
        return _.get(this.data, name)
    }

    public set = (name: string, value: any) => {
        const newData = { ...this.data }
        _.set(newData, name, value)
        this.setData(newData)
        this.data = newData
    }

    public colClass = (width?: string | number) => `mt-3 col ${typeof width === 'string' ? width : `col-12 col-md-${width || 12}`}`

    public Input = ({ label, name, width }: { label: string, name: string, width?: number | string }) => {
        return (
            <Form.Group className={this.colClass(width)} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control name={name} type="text" value={this.get(name)} onChange={e => this.set(name, e.target.value)} placeholder="" key={name} />
                <FieldError formState={this.formState} name={name} />
            </Form.Group>
        )
    }

    public TextArea = ({ label, name, width }: { label: string, name: string, width?: number | string }) => {
        return (
            <Form.Group className={this.colClass(width)} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <ReactTextareaAutosize className="form-control" name={name} value={this.get(name)} onChange={e => this.set(name, e.target.value)} placeholder="" key={name} />
                <FieldError formState={this.formState} name={name} />
            </Form.Group>
        )
    }

    public Select = ({ label, name, options, width }: { label: string, name: string, options: { id: string, name: string }[], width?: number | string }) => {
        return (
            <Form.Group className={this.colClass(width)} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Select name={name} value={this.get(name)} onChange={e => this.set(name, e.target.value)}>
                    {options.map(c => (<option value={c.id} key={c.id}  >{c.name}</option>))}
                </Form.Select>
                <FieldError formState={this.formState} name={name} />
            </Form.Group >
        )
    }

    public Button = ({ onClick, variant, children }: { onClick: () => void, variant?: string, children: any }) => {
        return (<div className="col col-auto mt-3">
            <label className="form-label">&nbsp;</label><br />
            <Button variant="light" onClick={onClick}>{children}</Button>
        </div>)
    }

}

