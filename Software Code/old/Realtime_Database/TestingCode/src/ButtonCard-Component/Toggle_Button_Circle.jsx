/* eslint-disable react/prop-types */
export default function Toggle_Button_Circle({value}) {
  return (
        <div className={`rounded-full w-[1rem] h-[1rem] ml-1 peer-checked:mr-3 ${value === true ? 'bg-white mr-1' : 'bg-gray-800'}`}></div>
  )
}
