export default function SearchButton({value, onclickhandler}){

    return(
    <>
    <button onClick={onclickhandler}>{value}</button>
    </>
)
}