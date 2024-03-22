export default function K18Input({ label, type, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label><br />
            <input type={type} id={name} name={name} value={value} onChange={onChange} /><br />
        </div>
    );
}