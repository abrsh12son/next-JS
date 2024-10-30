import { ReactNode } from "react"

interface courseGoalProps {
    title: string,
    description: string,
    children:ReactNode,
}
// we can alternatively use it
// type courseGoalProps = {
//     title: string,
//     description:string,
// }

function CourseGoal({ title, description, children }: courseGoalProps)

{
    return (
        <article className="grid justify-center items-center py-3 ">
            <div className=" flex flex-col gap-3 text-white px-24 py-10 bg-[#021821]">
                <h2 className="text-2xl font-black text-center">
                    {title}</h2>
                <p className="text-md font-serif">
                    {description}</p>
                <div className="text-right p-2">
                <button className="text-stone-800 bg-stone-400 shadow-sm shadow-stone-100 rounded-md px-5
                           hover:bg-stone-50 hover:text-stone-900 "
                >Delet</button>
                </div>
                <span>{children}</span>
              
            </div>

         
            
        </article>
    )
}
export default CourseGoal