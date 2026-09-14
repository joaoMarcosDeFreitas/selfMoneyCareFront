interface FormFieldProps {
    label: React.ReactNode;
    input: React.ReactNode;
    invalidInput?: string;
}

export function FormField({ label, input }: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label>{label}</label>
            {input}
        </div>
    )
}