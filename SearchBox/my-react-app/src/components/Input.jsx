export default function Input({placeholder, value,onchangefunction}){

return (
    <>
    <input placeholder={placeholder} value={value} onChange={onchangefunction}/>
    </>
)
}