import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

//export const TodoForm: React.FC<{onAdd(title: string): void}> = () => {
export const TodoForm: React.FC<TodoFormProps> = props => {

    const ref = useRef<HTMLInputElement>(null)

    /*1
    const [title, setTitle] = useState<string>('')

    const changeHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }*/

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            //1setTitle('')
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }
    
    return (
        <div className="input-field mt2">
            <input 
                //1 onChange={changeHadler}
                onKeyPress={keyPressHandler}
                ref={ref}
                //1 value={title} 
                type="text" id="title" placeholder="Type a name of todo"
            />
            <label htmlFor="title" className="active">
                Type a name of todo
            </label>
        </div>
    )
}